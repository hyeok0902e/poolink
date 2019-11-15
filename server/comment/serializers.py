from django.contrib.contenttypes.models import ContentType
from django.contrib.auth import get_user_model
from rest_framework import serializers
from user.serializers import UserDetailSeiralizer
from .models import Comment

User = get_user_model()

def create_comment_serializer(model_type='post', id=None, parent_id=None, user=None):
    class CommentCreateSerializer(serializers.ModelSerializer):
        class Meta:
            model = Comment
            fields = [
                'id',
                'content',
                'created_at',
            ]

        def __init__(self, *args, **kwargs):
            self.model_type = model_type
            self.parent_obj = None
            self.id = id
            if parent_id:
                parent_qs = Comment.objects.filter(id=parent_id)
                if parent_qs.exists() and parent_qs.count() ==1:
                    self.parent_obj = parent_qs.first()
            return super(CommentCreateSerializer, self).__init__(*args, **kwargs)

        def validate(self, data):
            model_type = self.model_type
            model_qs = ContentType.objects.filter(model=model_type)
            if not model_qs.exists() or model_qs.count() != 1:
                raise serializers.ValidationError("This is not a valid content type")
            SomeModel = model_qs.first().model_class()
            obj_qs = SomeModel.objects.filter(id=self.id)
            if not obj_qs.exists() or obj_qs.count() != 1:
                raise serializers.ValidationError("This is not a id for this content type")
            return data

        def create(self, validated_data):
            content = validated_data.get("content")
            if user:
                main_user = user
            else:
                main_user = User.objects.all().first()
            model_type = self.model_type
            id = self.id
            parent_obj = self.parent_obj
            comment = Comment.objects.create_by_model_type(
                    model_type, id, content, main_user,
                    parent_obj=parent_obj,
                    )
            return comment

    return CommentCreateSerializer

class CommentListSerializer(serializers.ModelSerializer):
    reply_count = serializers.SerializerMethodField()
    replies = serializers.SerializerMethodField()
    user = UserDetailSeiralizer(read_only=True)
    url = serializers.HyperlinkedIdentityField(
        view_name='comments-api:detail',
        lookup_url_kwarg='comment_id'
    )
    class Meta:
        model = Comment
        fields = [
            'id',
            'object_id',
            'parent',
            'url',
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
        read_only_fields = [
            'content_type',
            'object_id',
            'reply_count',
            'replies',
        ]

    def get_replies(self, obj):
        if obj.is_parent:
            return CommentChildSerializer(obj.children(), many=True).data
        return None

    def get_reply_count(self, obj):
        if obj.is_parent:
            return obj.children().count()
        return 0