# ecg_app/urls.py

from .views import csrf_token_view
from django.urls import path
from .views import predict_ecg

urlpatterns = [
    path('upload/', predict_ecg, name='upload'),
]


urlpatterns = [
    path('get-csrf-token/', csrf_token_view, name='get_csrf_token'),
]
