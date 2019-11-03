from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.mixins import DestroyModelMixin, UpdateModelMixin
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    UpdateAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView,
)
from rest_framework.permissions import (
    AllowAny,
    IsAdminUser,
    IsAuthenticated,
)
from .permissions import IsOwnerOrReadOnly
from rest_framework_jwt.settings import api_settings
from django.contrib.auth import (
    get_user_model, 
    authenticate
)
from .serializers import (
    UserCreateSerializer,
    UserLoginSerializer,
    UserListSerializer,
    UserDetailSeiralizer,
)
import uuid

User = get_user_model()


class UserListAPIView(ListAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = UserListSerializer
    queryset = User.objects.all()

class UserDetailAPIView(DestroyModelMixin, UpdateModelMixin, RetrieveAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = UserDetailSeiralizer
    queryset = User.objects.all()
    lookup_field = 'id'
    lookup_url_kwarg = 'user_id'

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class UserCreateAPIView(CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserCreateSerializer
    queryset = User.objects.all()


class UserLoginAPIView(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserLoginSerializer
    
    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = UserLoginSerializer(data=data)

        if serializer.is_valid(raise_exception=True):
            user = authenticate(email=serializer.validated_data['email'],
                                password=serializer.validated_data['password'])

            if user is not None:
                    
                jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
                jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

                payload = jwt_payload_handler(user)
                token = jwt_encode_handler(payload)

                return Response({'msg':'Login successful', 'token': token, 'is_login_success': True}, status=status.HTTP_200_OK)
            else:
                return Response({'msg': 'Credentials are not valid!'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
