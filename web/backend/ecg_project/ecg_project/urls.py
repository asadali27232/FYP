from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from ecg_app.views import predict_ecg, uploadpage
from ecg_project.views import csrf_token_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('upload/', predict_ecg, name='upload'),
    path('', uploadpage, name='uploadpage'),  # Route for the homepage
    path('get-csrf-token/', csrf_token_view,
         name='get_csrf_token'),  # New path for CSRF token
    path('', include('authapp.urls')),


]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
