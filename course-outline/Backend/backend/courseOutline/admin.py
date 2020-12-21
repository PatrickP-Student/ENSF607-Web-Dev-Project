from django.contrib import admin
from .models import CourseOutline

# Register your models here.

class CourseOutlineAdmin(admin.ModelAdmin):
    list_display = ('courseName', 'courseNumber')

admin.site.register(CourseOutline, CourseOutlineAdmin)