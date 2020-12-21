from rest_framework import serializers
from .models import CourseOutline

class CourseOutlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseOutline
        fields = '__all__'