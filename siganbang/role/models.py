from django.db import models

class Role(models.Model):
    user = models.ForeignKey('user.User', on_delete=models.CASCADE, null=True)
    rank = models.CharField(max_length=64)