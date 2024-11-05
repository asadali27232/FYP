from rest_framework import serializers
from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True)  # Ensure password is included

    class Meta:
        model = CustomUser
        fields = ['username', 'first_name', 'last_name', 'email',
                  'password', 'gender', 'dob', 'contact_number', 'user_type']

    def create(self, validated_data):
        # Create a new user with the validated data
        user = CustomUser(
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            gender=validated_data['gender'],
            dob=validated_data['dob'],
            contact_number=validated_data['contact_number'],
            user_type=validated_data['user_type'],
        )
        # Use set_password to hash the password
        user.set_password(validated_data['password'])
        user.save()
        return user
