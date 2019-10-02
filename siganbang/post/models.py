from django.db import models
from tagging.fields import TagField

# TODO: image upload field
class Post(models.Model):
    # user, category null True 제거해야함
    user = models.ForeignKey('user.User', on_delete=models.CASCADE, null=True)
    category = models.ForeignKey('category.Category', on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=100)
    content = models.TextField()
    tags = TagField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return 'post title : "{}"'.format(self.title)

    def __unicode__(self):
        return 'post title : "{}"'.format(self.title)