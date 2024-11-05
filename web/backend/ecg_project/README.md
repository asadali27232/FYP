# ECG Prediction Django Project

This project provides a web application for predicting ECG (electrocardiogram) signals using machine learning. It allows users to upload ECG data files and provides predictions based on the uploaded data.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Instructions](#instructions)

## Features

- Upload .hea and .dat ECG files.
- Predict ECG signal class based on user-inputted age and gender.
- Visualize ECG signals with predictions.

## Installation



1. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

2. Set up your database (if needed) and run migrations:
   ```bash
   python manage.py migrate
   ```

3. Run the Django development server:
   ```bash
   python manage.py runserver
   ```

## Usage

1. Open your web browser and go to `http://127.0.0.1:8000/upload/`.
2. Use the form to upload your `.hea` and `.dat` files.
3. Input your age and gender (0 for male, 1 for female) and submit the form.
4. View the prediction results and ECG visualization.

## Project Structure

```
ecg_project/
│
├── ecg_app/
│   ├── migrations/
│   ├── templates/
│   │   ├── upload.html
│   │   └── result.html
│   ├── utils/
│   │   ├── ECGClassifier.py
│   │   └── ptbxl_dataset_preprocessor.py
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── forms.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
│
├── ecg_project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── media/
│   └── uploads/
│
├── manage.py
└── requirements.txt
```

## Technologies Used

- Python 3.12
- Django 5.1.2
- PyTorch
- NumPy
- Pandas
- Matplotlib
- Seaborn


