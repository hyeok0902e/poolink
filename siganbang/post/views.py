from rest_framework import generics
from .models import Post
from .serializers import PostSerializer

class ListPostsView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
