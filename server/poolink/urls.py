from django.contrib import admin
from django.urls import path, include
from rest_framework import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('posts/', include('post.urls', namespace='post')),
    path('comments/', include('comment.urls', namespace='comment')),
    path('categories/', include('category.urls', namespace='category')),
]
