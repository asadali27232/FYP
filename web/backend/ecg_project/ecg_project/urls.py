from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from ecg_app.views import predict_ecg
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
    path('upload/', predict_ecg, name='upload'),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
