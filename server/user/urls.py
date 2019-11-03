from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from user import views

app_name = 'users-api'

urlpatterns = [
    path('', views.UserListAPIView.as_view(), name='list'),
    path('<int:user_id>/', views.UserDetailAPIView.as_view(), name='detail'),
    path('login/', views.UserLoginAPIView.as_view(), name='login'),
    path('register/', views.UserCreateAPIView.as_view(), name="register"),
]

urlpatterns = format_suffix_patterns(urlpatterns)