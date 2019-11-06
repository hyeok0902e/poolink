from rest_framework.pagination import (
    LimitOffsetPagination,
    PageNumberPagination,
)

class CategoryLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 10

class CategoryPageNumberPagination(PageNumberPagination):
    page_size = 10