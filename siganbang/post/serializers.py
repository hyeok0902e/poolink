from .models import Post, Tag, PostTag
from rest_framework import serializers

class PostTagSerializer(serializers.ModelSerializer):
    tag_name = serializers.ReadOnlyField(source='tag.name')

    class Meta:
        model = PostTag
        fields = ('tag_name', )

class PostSerializer(serializers.ModelSerializer):
    tags = PostTagSerializer(source='posttag_set', many=True)

    class Meta:
        model = Post
        fields = (
            'category', 
            'user', 
            'title', 
            'content', 
            'tags',
            'created_at', 
            'updated_at'
        )
