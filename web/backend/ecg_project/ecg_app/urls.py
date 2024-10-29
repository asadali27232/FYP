# ecg_app/urls.py

from django.urls import path
from .views import predict_ecg


urlpatterns = [
    path('upload/', predict_ecg, name='upload'),
]
