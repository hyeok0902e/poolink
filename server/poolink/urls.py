from django.contrib import admin
from django.urls import path, include
from rest_framework import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/posts/', include('post.urls', namespace='post')),
    path('api/comments/', include('comment.urls', namespace='comment')),
    path('api/categories/', include('category.urls', namespace='category')),
    path('api/users/', include('user.urls', namespace='user')),
]
