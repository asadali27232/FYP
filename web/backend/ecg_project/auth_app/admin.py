# auth_app/admin.py

from django.contrib import admin
from .models import CustomUser  # or User if you're using the default model

admin.site.register(CustomUser)  # Register your custom user model
