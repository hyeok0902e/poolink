from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.db import models

class UserAccountManager(BaseUserManager):
    def create_user(self, name, email, password=None):
        if not email:
            raise ValueError('Email missing')
        user = self.model(
            email=self.normalize_email(email),
            name=name
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, name, email, password=None):
        user = self.create_user(
            email=email,
            name=name,
            password=password
        )
        user.is_admin = True
        user.is_superuser = True
        user.is_active = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=30, default="")
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    object = UserAccountManager()

    # users are identified by email
    USERNAME_FIELD = 'email'
    # required fields to registe
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return "name: " + self.name

    @property
    def is_staff(self):
        return self.is_admin

    def has_module_perms(self, app_label):
        if self.is_active and self.is_superuser:
            return True

    def has_perm(self, perm, obj=None):
        if self.is_active and self.is_admin:
            return True

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    class Meta:
        db_table = 'users'