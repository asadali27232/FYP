from django.shortcuts import render
import os
import numpy as np
import pandas as pd
import joblib
import torch
import wfdb
import matplotlib.pyplot as plt
import seaborn as sns
from django.conf import settings
from .forms import UploadFileForm
from .utils.ptbxl_dataset_preprocessor import PTBXLDatasetPreprocesser
from .utils.ECGClassifier import ECGClassifier
from django.http import JsonResponse


def handle_uploaded_file(hea_file, dat_file):
    # Save the uploaded files to the media directory
    media_path = os.path.join(settings.MEDIA_ROOT, 'uploads')
    os.makedirs(media_path, exist_ok=True)

    hea_path = os.path.join(media_path, hea_file.name)
    dat_path = os.path.join(media_path, dat_file.name)

    with open(hea_path, 'wb+') as destination:
        for chunk in hea_file.chunks():
            destination.write(chunk)

    with open(dat_path, 'wb+') as destination:
        for chunk in dat_file.chunks():
            destination.write(chunk)

    return hea_path, dat_path


def normalize_age(user_age, actual_age_data):
    min_age = actual_age_data['age'].min()  # Assuming 'age' is the column name
    max_age = actual_age_data['age'].max()
    normalized = (user_age - min_age) / \
        (max_age - min_age)  # Normalize the age
    return normalized  # Return normalized value


def extract_superclass_labels(prediction):
    superclass_cols = ['NORM', 'MI', 'STTC', 'CD', 'HYP']
    superclass_labels = (prediction >= 0.5).astype(int)
    superclass_labels = pd.Series(superclass_labels[0], index=superclass_cols)

    # Extract class names where the label is 1
    class_names = superclass_labels[superclass_labels == 1].index.tolist()

    return superclass_labels, class_names


def plot_ecg_with_annotations(X_df, age, gender, superclass_labels, class_names, filename):
    fig, axes = plt.subplots(X_df.shape[1], 1, figsize=(10, 10), sharex=True)
    title = f"Age: {age}, Gender: {'Male' if gender == 0 else 'Female'}, Labels: {', '.join(class_names)}"
    fig.suptitle(title, fontsize=15)

    for i in range(X_df.shape[1]):
        sns.lineplot(x=np.arange(
            X_df.shape[0]), y=X_df.iloc[:, i], ax=axes[i], color='black')
        axes[i].grid(True)
        axes[i].set_ylabel('')  # Remove y-axis label
        axes[i].set_xlabel('')  # Remove x-axis label

    plt.tight_layout(rect=[0, 0, 1, 0.96])
    plt.savefig(filename)
    plt.close()  # Close the plot to free up memory


def predict_ecg(request):
    # Load actual age data
    actual_age_data = pd.read_csv(os.path.join(os.getcwd(), 'age.csv'))

    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            # Handle uploaded files
            hea_file = request.FILES['hea_file']
            dat_file = request.FILES['dat_file']
            age = form.cleaned_data['age']
            # Convert gender to integer
            gender = int(form.cleaned_data['gender'])

            # Save files
            hea_path, dat_path = handle_uploaded_file(hea_file, dat_file)

            # Load raw ECG data
            record = wfdb.rdrecord(dat_path.split('.')[0])
            X = record.p_signal  # ECG data

            # Prepare DataFrame
            X_df = pd.DataFrame(
                X, columns=[f'channel-{i+1}' for i in range(X.shape[1])])

            # Load preprocessor
            data_preprocessor_dict = joblib.load(
                os.path.join(os.getcwd(), 'data_preprocessor.pkl'))
            data_preprocessor = PTBXLDatasetPreprocesser()
            data_preprocessor.superclass_cols = data_preprocessor_dict['superclass_cols']
            data_preprocessor.meta_num_cols = data_preprocessor_dict['meta_num_cols']
            data_preprocessor.meta_num_means = data_preprocessor_dict['meta_num_means']
            data_preprocessor.min_max_scaler = data_preprocessor_dict['min_max_scaler']
            data_preprocessor.meta_cat_cols = data_preprocessor_dict['meta_cat_cols']
            data_preprocessor.cat_lablers = data_preprocessor_dict['cat_lablers']

            # Normalize age
            normalized_age = normalize_age(age, actual_age_data)

            # Initialize model
            per_cat_nunique = [len(labeler.classes_)
                               for labeler in data_preprocessor.cat_lablers]
            model = ECGClassifier(
                X_df.shape[1], 128, per_cat_nunique, 30, 1, 128, 5)
            model.load_state_dict(torch.load(os.path.join(
                os.getcwd(), 'pytorch_ecg_rnn.pth'), map_location='cpu'))
            model.eval()

            # Prepare data for prediction
            signal_instance = torch.tensor(X_df.values).unsqueeze(0).float()
            num_meta_instance = torch.tensor([[normalized_age]]).float()
            cat_meta_instance = torch.tensor([[gender]]).long()

            # Make prediction
            with torch.no_grad():
                pred = model(signal_instance, num_meta_instance,
                             cat_meta_instance)
                pred = torch.sigmoid(pred).numpy()

            # Extract superclass labels
            superclass_labels, class_names = extract_superclass_labels(pred)

            # Convert labels and class names to lists for JSON serialization
            superclass_labels = superclass_labels.tolist()
            class_names = class_names

            # Plot ECG
            plot_filename = os.path.join(
                settings.MEDIA_ROOT, 'uploads', 'ecg_image.png')
            plot_ecg_with_annotations(
                X_df, age, gender, superclass_labels, class_names, plot_filename)

            # Construct the response
            response_data = {
                'superclass_labels': superclass_labels,
                'class_names': class_names,
                'image_url': request.build_absolute_uri(settings.MEDIA_URL + 'uploads/ecg_image.png')
            }

            return JsonResponse(response_data)
        elif request.method == 'GET':
            return render(request, 'upload.html')

    return JsonResponse({'error': 'Invalid request'}, status=400)
