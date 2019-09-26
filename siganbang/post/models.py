from django.db import models

# TODO: image upload field
class Post(models.Model):
    user = models.ForeignKey('user.User', on_delete=models.CASCADE, null=True)
    category = models.ForeignKey('category.Category', on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=100)
    content = models.TextField()
    tags = models.ManyToManyField('Tag')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '"{}" in "{}". "{}" tagged'.format(self.title, self.category, ', '.join([tag.name for tag in self.tags.all()]))


# Post-Tag M2M relationship
class Tag(models.Model):
    name = models.CharField(max_length=64, null=True)
    
    def __str__(self):
        return self.name