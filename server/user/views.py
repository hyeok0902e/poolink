from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    UpdateAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView
)
from django.contrib.auth import get_user_model
from .serializers import UserCreateSerializer

User = get_user_model()

class UserCreateAPIView(CreateAPIView):
    serializer_class = UserCreateSerializer
    queryset = User.objects.all()
