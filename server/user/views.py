from django.http import Http404
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_400_BAD_REQUEST
)
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
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
from django.contrib.auth import get_user_model
from .serializers import (
    UserCreateSerializer,
    UserLoginSerializer,
    UserListSerializer,
    UserDetailSeiralizer,
    UserUpdateSerializer,
    UserTokenSerializer
)

User = get_user_model()

class UserListAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserListSerializer
    permission_classes = [IsAdminUser]
    
class UserDetailAPIView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSeiralizer
    permission_classes = [IsOwnerOrReadOnly]
    lookup_field = 'id'
    lookup_url_kwarg = 'user_id'

class UserCreateAPIView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer
    permission_classes = [AllowAny]

class UserUpdateAPIView(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserUpdateSerializer
    permission_classes = [IsOwnerOrReadOnly]
    lookup_field = 'id'
    lookup_url_kwarg = 'user_id'

class UserDeleteAPIView(DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSeiralizer
    permission_classes = [IsOwnerOrReadOnly]
    lookup_field = 'id'
    lookup_url_kwarg = 'user_id'
    
class UserLoginAPIView(APIView):
    serializer_class = UserLoginSerializer
    permission_classes = [AllowAny]
    
    def post(self, request, *args, **kwargs):
        serializer = UserTokenSerializer(
            data=request.data,
            context={'request': request}
        )
        if serializer.is_valid(raise_exception=True):
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user': user.username
            }, status=HTTP_200_OK)

        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

class UserLogoutAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        try:
            request.user.auth_token.delete()
            msg = 'Logout Success!'
            return Response(msg, status=HTTP_200_OK)
        except:
            msg = 'Logout Fail!'
            return Response(msg, status=HTTP_400_BAD_REQUEST)