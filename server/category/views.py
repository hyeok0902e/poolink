from django.db.models import Q
from rest_framework.filters import (
        SearchFilter,
        OrderingFilter,
)
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView, 
    UpdateAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView
)
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)
from .pagination import (
    CategoryLimitOffsetPagination,
    CategoryPageNumberPagination
)

from .models import Category

from .serializers import (
    CategoryListSerializer,
    CategoryDetailSerializer,
    CategoryCreateUpdateSerializer,
)


class CategoryCreateAPIView(CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryCreateUpdateSerializer
    permission_classes = [IsAdminUser]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class CategoryDetailAPIView(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryDetailSerializer
    lookup_field = 'slug'
    
    permission_classes = [IsAdminUser]


class CategoryUpdateAPIView(RetrieveUpdateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryCreateUpdateSerializer
    lookup_field = 'slug'

    permission_classes = [IsAdminUser]
    
    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class CategoryDeleteAPIView(DestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryDetailSerializer
    lookup_field = 'slug'
    
    permission_classes = [IsAdminUser]


class CategoryListAPIView(ListAPIView):
    serializer_class = CategoryListSerializer
    filter_backends= [SearchFilter, OrderingFilter]
    permission_classes = [AllowAny]
    search_fields = ['title', ]
    pagination_class = CategoryPageNumberPagination

    def get_queryset(self, *args, **kwargs):
        queryset_list = Category.objects.all()
        query = self.request.GET.get("query")
        if query:
            queryset_list = queryset_list.filter(Q(title__icontains=query)).distinct()
        return queryset_list


