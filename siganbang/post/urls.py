from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from post import views

app_name = 'post'

urlpatterns = [
    path('', views.PostList.as_view(), name="post_list"),
    path('<int:post_id>', views.PostDetail.as_view(), name="post_detail"),
]

urlpatterns = format_suffix_patterns(urlpatterns)