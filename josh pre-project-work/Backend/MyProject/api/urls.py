from django.urls import path
from .views import EchosAPIView, EchosDetails

urlpatterns = [
    path('api/echos/', EchosAPIView.as_view()),
    path('api/echos/<int:id>/', EchosDetails.as_view())
]