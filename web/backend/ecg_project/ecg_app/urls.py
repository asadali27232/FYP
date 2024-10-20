# ecg_app/urls.py

from .views import csrf_token_view
from django.urls import path
from .views import predict_ecg
from .views import csrf_token_view


urlpatterns = [
    path('upload/', predict_ecg, name='upload'),
    path('get-csrf-token/', csrf_token_view,
         name='get_csrf_token'),  # New path for CSRF token

]
