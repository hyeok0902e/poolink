from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin', admin.site.urls),
    path('posts', include('post.urls', namespace='post')),
    path('comments', include('comment.urls', namespace='comment')),
]
