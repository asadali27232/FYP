from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from ecg_app.views import predict_ecg
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('upload/', predict_ecg, name='upload'),
    path('', TemplateView.as_view(template_name='home.html'),
         name='home'),  # Home page route

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
