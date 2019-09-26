from django.db import models

# TODO: image upload field
class Post(models.Model):
    user = models.ForeignKey('user.User', on_delete=models.CASCADE, null=True)
    category = models.ForeignKey('category.Category', on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=100)
    content = models.TextField()
    tags = models.ManyToManyField('Tag', blank=True, through='PostTag')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return 'post title : "{}"'.format(self.title)

    def __unicode__(self):
        return 'post title : "{}"'.format(self.title)

class Tag(models.Model):
    name = models.CharField(max_length=64, null=True)
    
    def __unicode__(self):
        return 'tag : "{}"'.format(self.name)

    def __str__(self):
        return 'tag : "{}"'.format(self.name)

class PostTag(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

    def __unicode__(self):
        return '{} to {}'.format(self.tag, self.post)

    def __str__(self):
        return '{} to {}'.format(self.tag, self.post)