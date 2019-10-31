from rest_framework import serializers
from user.serializers import UserDetailSeiralizer
from .models import Comment

class CommentListSerializer(serializers.ModelSerializer):
    reply_count = serializers.SerializerMethodField()
    user = UserDetailSeiralizer(read_only=True)

    class Meta:
        model = Comment
        fields = [
            'id',
            'content_type',
            'object_id',
            'content',
            'reply_count',
            'user',
            'created_at',
        ]
    
    def get_reply_count(self, obj):
        if obj.is_parent:
            return obj.children().count()
        return 0


class CommentChildSerializer(serializers.ModelSerializer):
    user = UserDetailSeiralizer(read_only=True)
    replies = serializers.SerializerMethodField()
    class Meta:
        model = Comment
        fields = [
            'id',
            'content',
            'user',
            'replies',
            'created_at',
        ]

    # reply to field can be solution of nested comments
    # reply_to doesn't exists -> replies -> doesn't shown
    # reply_to exists -> replies -> should be shown
    def get_replies(self, obj):
        return CommentChildSerializer(obj.children(), many=True).data
    

class CommentDetailSerializer(serializers.ModelSerializer):
    reply_count = serializers.SerializerMethodField()
    replies = serializers.SerializerMethodField()
    user = UserDetailSeiralizer(read_only=True)

    class Meta:
        model = Comment
        fields = [
            'id',
            'content_type',
            'object_id',
            'content',
            'reply_count',
            'replies',
            'user',
            'created_at',
        ]

    def get_replies(self, obj):
        if obj.is_parent:
            return CommentChildSerializer(obj.children(), many=True).data
        return None

    def get_reply_count(self, obj):
        if obj.is_parent:
            return obj.children().count()
        return 0