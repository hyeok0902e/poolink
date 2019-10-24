from django.conf import settings
from django.db import models

class Role(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    rank = models.CharField(max_length=64)

    class Meta:
        db_table = 'roles'