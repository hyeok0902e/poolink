from django.urls import path
from .views import ListPostsView

# TODO: set detail urls
urlpatterns = [
    path('', ListPostsView.as_view(), name="posts-all")
]
