# ecg_app/urls.py

from django.urls import path
from .views import predict_ecg
from .views import upload_view


urlpatterns = [
    path('upload/', predict_ecg, name='upload'),
    path('upload/', upload_view, name='upload'),
]
