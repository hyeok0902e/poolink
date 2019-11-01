from django.contrib import admin
from django.urls import path, include
from rest_framework import urls

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_framework.urls')),

    path('api/posts/', include('post.urls', 'posts-api')),
    path('api/comments/', include('comment.urls', 'comments-api')),
    path('api/categories/', include('category.urls', 'categories-api')),
    path('api/users/', include('user.urls', 'users-api')),
    path('api/auth/token/', obtain_jwt_token),
]


# curl -X POST -d "email=baro@poolink.com&password=cz786v6g" http://127.0.0.1:8000/api/auth/token/
# "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImJhcm9AcG9vbGluay5jb20iLCJleHAiOjE1NzIyNzc4OTcsImVtYWlsIjoiYmFyb0Bwb29saW5rLmNvbSJ9.bSZQ9QSEijXt9WlsEr6VCch8ql5LBKmHPISBvM0k8No"
# curl -H "Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImJhcm9AcG9vbGluay5jb20iLCJleHAiOjE1NzIyNzc4OTcsImVtYWlsIjoiYmFyb0Bwb29saW5rLmNvbSJ9.bSZQ9QSEijXt9WlsEr6VCch8ql5LBKmHPISBvM0k8No" http://127.0.0.1:8000/api/comments/
# curl http://127.0.0.1.8000/api/comments/
