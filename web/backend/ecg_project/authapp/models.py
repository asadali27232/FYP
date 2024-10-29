from django.db import models
from django.conf import settings


class Patient(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date_of_birth = models.DateField(null=True, blank=True)
    medical_history = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.user.username} - Patient"


class Doctor(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    specialization = models.CharField(max_length=100)
    years_of_experience = models.PositiveIntegerField()
    license_number = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.user.username} - Doctor"
