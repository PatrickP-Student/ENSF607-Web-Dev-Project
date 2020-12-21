from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CourseOutlineSerializer
from .models import CourseOutline

# Create your views here.

class CourseOutlineView(viewsets.ModelViewSet):
    serializer_class = CourseOutlineSerializer
    queryset = CourseOutline.objects.all()