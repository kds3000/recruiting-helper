from django.urls import path, include

from core import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('vacancies', views.VacanciesViewSet, basename='vacancies')

urlpatterns = [
    path('', views.index),
    path('api/', include(router.urls)),
]
