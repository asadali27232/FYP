# auth_app/urls.py

from django.urls import path
from .views import SignUpView, LoginView, UserListView, ProtectedView, UserInfoView


urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('users/', UserListView.as_view(), name='user-list'),
    path('tokentest/', ProtectedView.as_view(), name='protected'),
    path('user/', UserInfoView.as_view(), name='user'),
]
