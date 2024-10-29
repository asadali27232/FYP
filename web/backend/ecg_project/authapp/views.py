from django.contrib.auth import get_user_model
from rest_framework import generics, permissions
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import UserRegisterSerializer, PatientSerializer, DoctorSerializer
from .models import Patient, Doctor

User = get_user_model()  # Retrieve the custom user model


class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [permissions.AllowAny]


class CustomTokenObtainPairView(TokenObtainPairView):
    pass  # Use default behavior for token generation


class PatientProfileView(generics.RetrieveUpdateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        # Get the profile for the authenticated user
        return self.request.user.patient_profile


class DoctorProfileView(generics.RetrieveUpdateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        # Get the profile for the authenticated user
        return self.request.user.doctor_profile
