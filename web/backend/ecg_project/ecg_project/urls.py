from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from ecg_app.views import predict_ecg, uploadpage

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', uploadpage, name='uploadpage'),  # Route for the homepage
    path('upload/', predict_ecg, name='upload'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
