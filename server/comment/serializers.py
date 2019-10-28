from django.contrib.auth import get_user_model
from rest_framework import serializers
from user.serializers import UserDetailSeiralizer
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    user = UserDetailSeiralizer(read_only=True)
    class Meta:
        model = Comment
        fields = '__all__'