from django.conf import settings
from django.db import models
from mptt.models import MPTTModel, TreeForeignKey

class Comment(MPTTModel):
    # user, post > null True 제거
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    post = models.ForeignKey('post.Post', on_delete=models.CASCADE, null=True)
    parent = TreeForeignKey('self', null=True, blank=True, on_delete=models.CASCADE, related_name='replies')
    reply_to = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, null=True, on_delete=models.CASCADE, related_name='replyers')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return '{} : {}'.format(self.user, self.content)

    def __str__(self):
        return '{} : {}'.format(self.user, self.content)

    class Meta:
        db_table = 'comments'