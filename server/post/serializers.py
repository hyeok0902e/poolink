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
    url = serializers.HyperlinkedIdentityField(
        view_name='posts-api:detail',
        lookup_url_kwarg='post_id'
    )
    class Meta:
        model = Post
        fields = [
            'id',
            'url',
            'category',
            'title',
            'content',
            'user',
            'created_at',
        ]

    
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

