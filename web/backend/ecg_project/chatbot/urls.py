from django.urls import path
from .views import chat_response

urlpatterns = [
    path('chat/', chat_response, name='chat_response'),
]
