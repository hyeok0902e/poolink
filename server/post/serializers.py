from rest_framework import serializers
from user.serializers import UserDetailSeiralizer
from comment.serializers import (
    CommentListSerializer,
    CommentDetailSerializer,
)
from comment.models import Comment
from .models import Post


class PostListSerializer(serializers.ModelSerializer):
    user = UserDetailSeiralizer(read_only=True)
    comments_count = serializers.SerializerMethodField()
    class Meta:
        model = Post
        fields = [
            'id',
            'category',
            'title',
            'content',
            'user',
            'comments_count',
            'created_at',
        ]
    
    def get_comments_count(self, obj):
        c_qs = Comment.objects.filter_by_instance(obj)
        comments_count = CommentDetailSerializer(c_qs, many=True).data[0]['reply_count'] + 1
        return comments_count
        
    
class PostDetailSerializer(serializers.ModelSerializer):
    user = UserDetailSeiralizer(read_only=True)
    comments = serializers.SerializerMethodField()
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
            'comments',
        ]

    def get_comments(self, obj):
        c_qs = Comment.objects.filter_by_instance(obj)
        comments = CommentDetailSerializer(c_qs, many=True).data
        return comments
        

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

