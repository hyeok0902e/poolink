from rest_framework.reverse import reverse
from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField
)
from .models import Category

class CategoryListSerializer(ModelSerializer):    
    url = HyperlinkedIdentityField(
        view_name='categories-api:detail',
        lookup_url_kwarg='category_slug',
        lookup_field='slug'

    )
    
    class Meta:
        model = Category
        fields = [
            'url',
            'title',
            'slug',
            'parent'
        ]


class CategoryDetailSerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id',
            'title',
            'slug',
            'parent'
        ]

class CategoryCreateUpdateSerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'title',
            'parent'
        ]

