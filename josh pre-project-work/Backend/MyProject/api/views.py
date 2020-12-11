from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .models import Echos
from rest_framework.decorators import api_view
from .serializers import EchoSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import mixins

# Create your views here.

# class GenericAPIView(generics.GenericAPIView, mixins.ListModelMixin):
#     serializer_class = ArticleSerializer
#     queryset = Echos.objects.all()


class EchosAPIView(APIView):

    def get(self, request):
        echos = Echos.objects.all()
        serializer = EchoSerializer(echos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EchoSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EchosDetails(APIView):

    def get_object(self, id):
        try:
            return Echos.objects.get(id=id)

        except Echos.DoesNotExist:
            return Response(status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        echo = self.get_object(id)
        serializer = EchoSerializer(echo)
        return Response(serializer.data)

    def put(self, request, id):
        echo = self.get_object(id)
        serializer = EchoSerializer(echo, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        echo = self.get_object(id)
        echo.delete()
        return Response(status.HTTP_204_NO_CONTENT)
