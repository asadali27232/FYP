from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models


class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password=None, first_name=None, last_name=None, gender=None, dob=None, contact_number=None, user_type=None):
        if not email:
            raise ValueError("Users must have an email address")
        if not username:
            raise ValueError("Users must have a username")

        user = self.model(
            username=username,
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
            gender=gender,
            dob=dob,
            contact_number=contact_number,
            user_type=user_type,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, first_name=None, last_name=None, gender=None, dob=None, contact_number=None):
        user = self.create_user(
            username,
            email,
            password,
            first_name=first_name,
            last_name=last_name,
            gender=gender,
            dob=dob,
            contact_number=contact_number,
            user_type='admin'  # You can assign a default user type for superuser
        )
        user.is_admin = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=30, unique=True)
    first_name = models.CharField(max_length=30, default='Unknown')  # New field
    last_name = models.CharField(max_length=30, default='Unknown')   # New field
    gender = models.CharField(max_length=10, choices=[(
        'male', 'Male'), ('female', 'Female'), ('other', 'Other')], null=True)  # New field
    dob = models.DateField(null=True)  # New field
    contact_number = models.CharField(max_length=15, null=True)  # New field
    user_type = models.CharField(max_length=10, choices=[(
        'patient', 'Patient'), ('doctor', 'Doctor')], null=True)  # New field
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name',
                       'last_name']  # Add the new fields here

    def __str__(self):
        return self.email
