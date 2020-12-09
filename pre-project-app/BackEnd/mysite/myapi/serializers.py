from rest_framework import serializers
from .models import Echos

class EchosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Echos
        fields = '__all__'