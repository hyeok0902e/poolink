from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField
)
from .models import Category


class CategoryListSerializer(ModelSerializer):    
    url = HyperlinkedIdentityField(
        view_name='categories-api:detail',
        lookup_url_kwarg='slug'
    )
    
    class Meta:
        model = Category
        lookup_field = 'slug'
        fields = [
            'url',
            'title',
            'slug',
        ]


class CategoryDetailSerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id',
            'title',
            'slug',
        ]

class CategoryCreateUpdateSerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'title',
            'slug'
        ]

