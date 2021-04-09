from rest_framework import serializers


class VacancySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=128)
