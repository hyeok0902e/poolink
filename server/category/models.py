from django.conf import settings
from django.db import models
from django.utils.text import slugify

class Category(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=126)
    slug = models.SlugField(unique=True, allow_unicode=True)
    parent = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE, related_name='children')

    class Meta:
        unique_together = ('slug', 'parent')
        verbose_name_plural = 'Categories'
        db_table = 'categories'

    def __str__(self):
        full_path = [self.title]                  
        k = self.parent
        while k is not None:
            full_path.append(k.title)
            k = k.parent
        return ' -> '.join(full_path[::-1])

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title, allow_unicode=True)
        super(Category, self).save(*args, **kwargs)