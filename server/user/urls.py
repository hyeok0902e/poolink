from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from user import views

app_name = 'user'

urlpatterns = [
    path('register/', views.UserCreateAPIView.as_view(), name="register"),
]

urlpatterns = format_suffix_patterns(urlpatterns)