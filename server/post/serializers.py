from django.contrib.auth import get_user_model
from rest_framework import serializers
from user.serializers import UserDetailSeiralizer
from .models import Post

User = get_user_model()

class PostSerializer(serializers.ModelSerializer):
    user = UserDetailSeiralizer(read_only=True)
    class Meta:
        model = Post
        fields = '__all__'