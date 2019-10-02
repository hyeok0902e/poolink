from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from comment import views

app_name = 'comment'

urlpatterns = [
    path('', views.CommentList.as_view(), name="comment_list"),
    path('<int:comment_id>', views.CommentDetail.as_view(), name="comment_detail"),
]

urlpatterns = format_suffix_patterns(urlpatterns)