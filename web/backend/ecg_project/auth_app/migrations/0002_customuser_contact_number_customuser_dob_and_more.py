# Generated by Django 5.1.2 on 2024-11-03 10:53

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("auth_app", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="customuser",
            name="contact_number",
            field=models.CharField(max_length=15, null=True),
        ),
        migrations.AddField(
            model_name="customuser",
            name="dob",
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name="customuser",
            name="first_name",
            field=models.CharField(default="Unknown", max_length=30),
        ),
        migrations.AddField(
            model_name="customuser",
            name="gender",
            field=models.CharField(
                choices=[("male", "Male"), ("female", "Female"), ("other", "Other")],
                max_length=10,
                null=True,
            ),
        ),
        migrations.AddField(
            model_name="customuser",
            name="last_name",
            field=models.CharField(default="Unknown", max_length=30),
        ),
        migrations.AddField(
            model_name="customuser",
            name="user_type",
            field=models.CharField(
                choices=[("patient", "Patient"), ("doctor", "Doctor")],
                max_length=10,
                null=True,
            ),
        ),
    ]
