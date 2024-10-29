from django.shortcuts import render


def home(request):
    # This will look for a 'home.html' template
    return render(request, 'home.html')
