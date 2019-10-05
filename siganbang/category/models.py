from django.db import models

class Category(models.Model):
    user = models.ForeignKey('user.User', on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=126)
    description = models.TextField(null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'Categories'
        db_table = 'categories'