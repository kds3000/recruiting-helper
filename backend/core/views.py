from django.shortcuts import render
from rest_framework import viewsets
from core import serializers
from core import models


def index(request):
    return render(request, 'index.html')


class VacanciesViewSet(viewsets.ModelViewSet):
    queryset = models.Vacancy.objects.all()
    serializer_class = serializers.VacancySerializer
