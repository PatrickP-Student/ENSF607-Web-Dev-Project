from rest_framework import serializers
from .models import Echos

class EchoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Echos
        fields = "__all__"

