from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Patient, Doctor

User = get_user_model()


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'role']

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            role=validated_data['role']
        )
        user.set_password(validated_data['password'])
        user.save()

        if validated_data['role'] == 'patient':
            Patient.objects.create(user=user)
        elif validated_data['role'] == 'doctor':
            Doctor.objects.create(user=user)

        return user


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'user', 'date_of_birth', 'medical_history']


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id', 'user', 'specialization',
                  'years_of_experience', 'license_number']
