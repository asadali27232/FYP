from django.urls import path
from . import views

urlpatterns = [
    path('generate-response/', views.generate_response, name='generate_response'),
]
