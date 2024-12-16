Overview
This Python script processes ECG (Electrocardiogram) images and predicts heart disease using image processing techniques and machine learning models.




ECG Image Processing and Heart Disease Prediction
Overview
This Python script processes ECG (Electrocardiogram) images and predicts heart disease using image processing techniques and machine learning models.

Prerequisites
Make sure you have the following dependencies installed:

scikit-image
matplotlib
numpy
natsort
scikit-learn
pandas
joblib
You can install these dependencies using the following command:
pip install scikit-image matplotlib numpy natsort scikit-learn pandas joblib
Download the trained models from the provided model folder and place them in the model directory of this project.

Run the Script:

Execute the main script Ecg.py:

python Ecg.py


View Results:

The script will display the original ECG image, grayscale image, divided leads, preprocessed leads, and contour leads. It will also save corresponding figures in the current directory.

Finally, the script will load trained machine learning models from the model directory and predict the heart disease category based on the processed ECG data.


Additional Information
The machine learning models are loaded from the model directory.
The PCA model is loaded from model/PCA_ECG.pkl.
The heart disease prediction model is loaded from model/Heart_Disease_Prediction_using_image_processing__ECG.pkl.

Note: Update the paths and directory names accordingly,
