from django.db import models

class User(models.Model):
    name = models.CharField(max_length=64)
    email = models.CharField(max_length=256)
    password = models.CharField(max_length=64)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'users'