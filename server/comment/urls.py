from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from comment import views

app_name = 'comment'

urlpatterns = [
    path('', views.CommentListAPIView.as_view(), name="list"),
    path('<int:comment_id>/', views.CommentDetailAPIView.as_view(), name="detail"),
]

urlpatterns = format_suffix_patterns(urlpatterns)