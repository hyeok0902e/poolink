from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from category import views

app_name = 'categories-api'

urlpatterns = [
    path('', views.CategoryListAPIView.as_view(), name="list"),
    path('create/', views.CategoryCreateAPIView.as_view(), name="create"),
    path('<slug:slug>/', views.CategoryDetailAPIView.as_view(), name="detail"),
    path('<slug:slug>/edit/', views.CategoryDetailAPIView.as_view(), name="update"),
    path('<slug:slug>/delete/', views.CategoryDetailAPIView.as_view(), name="delete"),
]

urlpatterns = format_suffix_patterns(urlpatterns)