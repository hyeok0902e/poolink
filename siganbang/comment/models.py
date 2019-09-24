from django.db import models

class Comment(models.Model):
    user = models.ForeignKey('user.User', on_delete=models.CASCADE, null=True)
    post = models.ForeignKey('post.Post', on_delete=models.CASCADE, null=True)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content