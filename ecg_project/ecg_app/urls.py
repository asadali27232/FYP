# ecg_app/urls.py

from django.urls import path
from .views import process_ecg, home  # Import the views

urlpatterns = [
    path('process_ecg/', process_ecg, name='process_ecg'),
    path('', home, name='home'),  # Add this line to handle the root URL
]