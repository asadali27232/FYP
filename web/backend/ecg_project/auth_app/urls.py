# auth_app/urls.py

from django.urls import path
from .views import SignUpView, LoginView, UserListView, ProtectedView, UserInfoView, DoctorListView, UploadProfilePictureView, UserProfilePictureView


urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('users/', UserListView.as_view(), name='user-list'),
    path('tokentest/', ProtectedView.as_view(), name='protected'),
    path('user/', UserInfoView.as_view(), name='user'),
    path('doctors/', DoctorListView.as_view(), name='doctor-list'),
    path('uploadprofilepicture/', UploadProfilePictureView.as_view(),
         name='upload_profile_picture'),
    path('getprofilepicture/', UserProfilePictureView.as_view(),
         name='get_profile_picture'),
]
