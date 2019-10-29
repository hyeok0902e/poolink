from rest_framework import serializers
from user.serializers import UserDetailSeiralizer
from .models import Post


class PostListSerializer(serializers.ModelSerializer):
    user = UserDetailSeiralizer(read_only=True)
    class Meta:
        model = Post
        fields = [
            'id',
            'category',
            'title',
            'content',
            'user',
            'tags',
            'created_at',
            'updated_at',
        ]

class PostDetailSerializer(serializers.ModelSerializer):
    user = UserDetailSeiralizer(read_only=True)
    class Meta:
        model = Post
        fields = [
            'id',
            'category',
            'title',
            'content',
            'user',
            'tags',
            'created_at',
            'updated_at',
        ]

# user should to change to request.user
class PostCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'category',
            'title',
            'content',
            'tags',
        ]

