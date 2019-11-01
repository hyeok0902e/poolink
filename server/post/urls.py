from django.urls import path
from post import views

app_name = 'posts-api'

urlpatterns = [
    path('', views.PostListAPIView.as_view(), name="list"),
    path('create/', views.PostCreateAPIView.as_view(), name="create"),
    path('<int:post_id>/', views.PostDetailAPIView.as_view(), name="detail"),
    path('<int:post_id>/edit/', views.PostUpdateAPIView.as_view(), name="update"),
    path('<int:post_id>/delete/', views.PostDeleteAPIView.as_view(), name="delete"),
]