from django.urls import path
from .views import UserRegisterView, CustomTokenObtainPairView, PatientProfileView, DoctorProfileView

urlpatterns = [
    path('signup/', UserRegisterView.as_view(), name='signup'),
    path('login/', CustomTokenObtainPairView.as_view(), name='login'),
    path('patient/profile/', PatientProfileView.as_view(), name='patient-profile'),
    path('doctor/profile/', DoctorProfileView.as_view(), name='doctor-profile'),
]
