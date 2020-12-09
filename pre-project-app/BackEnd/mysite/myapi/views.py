from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EchosSerializer
from .models import Echos

# Create your views here.

class EchosViewSet(viewsets.ModelViewSet):
    queryset = Echos.objects.all().order_by('message')
    serializer_class = EchosSerializer