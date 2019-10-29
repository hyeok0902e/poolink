# from django.http import Http404
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from .models import Post
# from .serializers import PostSerializer

# class PostList(APIView):
#     serializer_class = PostSerializer
    
#     def get(self, request, format=None):
#         posts = Post.objects.all()
#         serializer = PostSerializer(posts, many=True)
#         return Response(serializer.data)

#     def post(self, request, format=None):
#         serializer = PostSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(user=self.request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.erros, status=status.HTTP_400_BAD_REQUEST)

# class PostDetail(APIView):
#     serializer_class = PostSerializer

#     def get_object(self, post_id):
#         try:
#             return Post.objects.get(pk=post_id)
#         except Post.DoesNotExist:
#             raise Http404

#     def get(self, request, post_id, format=None):
#         post = self.get_object(post_id)
#         serializer = PostSerializer(post)
#         return Response(serializer.data)

#     def put(self, request, post_id, format=None):
#         post = self.get_object(post_id)
#         serializer = PostSerializer(post, data=request.data)
#         if serializer.is_valid():
#             serializer.save(user=self.request.user)
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, post_id, format=None):
#         post = self.get_object(post_id)
#         post.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)
from .permissions import IsOwnerOrReadOnly
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    DestroyAPIView,
    CreateAPIView,
    RetrieveUpdateAPIView,
)
from rest_framework.filters import (
    SearchFilter,
    OrderingFilter,
)
from .serializers import (
    PostListSerializer,
    PostDetailSerializer,
    PostCreateUpdateSerializer,
)
from django.contrib.auth import get_user_model
from django.db.models import Q
from .models import Post

# Default user test
User = get_user_model()
User_obj = User.objects.all().first()

class PostListAPIView(ListAPIView):
    permission_classes = [AllowAny]
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['title', 'content', 'user__username']

    serializer_class = PostListSerializer

    def get_queryset(self, *args, **kwargs):
        queryset_list = Post.objects.all()
        query = self.request.GET.get("query")
        if query:
            queryset_list = queryset_list.filter(
                Q(user__username__icontains=query) |
                Q(title__icontains=query) |
                Q(content__icontains=query)
            ).distinct()
        return queryset_list

class PostDetailAPIView(RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = PostDetailSerializer
    queryset = Post.objects.all()
    lookup_field = 'id'
    lookup_url_kwarg = 'post_id'

class PostCreateAPIView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostCreateUpdateSerializer
    queryset = Post.objects.all()

    def perform_create(self, serializer):
        # TODO: request get user
        # serializer.save(user=self.request.user)
        serializer.save(user=User_obj)

class PostUpdateAPIView(RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    serializer_class = PostCreateUpdateSerializer
    queryset = Post.objects.all()
    lookup_field = 'id'
    lookup_url_kwarg = 'post_id'

    def perform_update(self, serializer):
        # TODO: request get user
        # serializer.save(user=self.request.user)
        serializer.save(user=User_obj)


class PostDeleteAPIView(DestroyAPIView):
    permission_classes = [IsAuthenticated, IsAdminUser]
    serializer_class = PostDetailSerializer
    queryset = Post.objects.all()
    lookup_field = 'id'
    lookup_url_kwarg = 'post_id'