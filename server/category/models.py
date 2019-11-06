from django.conf import settings
from django_extensions.db.fields import AutoSlugField
from django.db import models

class Category(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=126)
    slug = AutoSlugField(populate_from='title')
    parent = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE, related_name='children')

    class Meta:
        unique_together = ('slug', 'parent')
        verbose_name_plural = 'Categories'
        db_table = 'categories'

    def slugify_function(self, content):
        return content.replace('_', '-').lower()

    def __str__(self):
        full_path = [self.title]                  
        k = self.parent
        while k is not None:
            full_path.append(k.title)
            k = k.parent
        return ' -> '.join(full_path[::-1])

    