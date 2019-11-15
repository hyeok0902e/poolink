from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)
from .permissions import IsOwnerOrReadOnly
from rest_framework.mixins import DestroyModelMixin, UpdateModelMixin
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
    CommentListSerializer,
    CommentDetailSerializer,
    create_comment_serializer,
)
from django.db.models import Q
from .models import Comment


class CommentListAPIView(ListAPIView):
    serializer_class = CommentListSerializer
    permission_classes = [AllowAny]
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['content', 'user__username']


    def get_queryset(self, *args, **kwargs):
        queryset_list = Comment.objects.filter(id__gte=0)
        query = self.request.GET.get("query")
        if query:
            queryset_list = queryset_list.filter(
                Q(user__username__icontains=query) |
                Q(content__icontains=query)
            ).distinct()
        return queryset_list


class CommentCreateAPIView(CreateAPIView):
    queryset = Comment.objects.all()
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        model_type = self.request.GET.get('type')
        id = self.request.GET.get('id')
        parent_id = self.request.GET.get('parent_id')
        return create_comment_serializer(
                model_type=model_type,
                id=id, 
                parent_id=parent_id, 
                user=self.request.user
                )

class CommentDetailAPIView(DestroyModelMixin, UpdateModelMixin, RetrieveAPIView):
    queryset = Comment.objects.filter(id__gte=0)
    serializer_class = CommentDetailSerializer
    permission_classes = [IsOwnerOrReadOnly]
    lookup_field = 'id'
    lookup_url_kwarg = 'comment_id'

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)