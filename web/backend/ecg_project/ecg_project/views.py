# views.py
from django.http import JsonResponse
from django.middleware.csrf import get_token


def csrf_token_view(request):
    token = get_token(request)
    response = JsonResponse({'csrfToken': token})
    response.set_cookie('csrftoken', token)  # Set CSRF token as a cookie
    return response
