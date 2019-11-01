from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from category import views

app_name = 'categories-api'

urlpatterns = [
    path('', views.CategoryList.as_view(), name="list"),
    path('<int:category_id>/', views.CategoryDetail.as_view(), name="detail"),
]

urlpatterns = format_suffix_patterns(urlpatterns)