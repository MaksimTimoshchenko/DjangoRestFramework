from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager 
)


class UserManager(BaseUserManager):
    def create_user(self, username, email, password):
        """
        Creates and saves a User with the given username, email and password.
        """
        if not username:
            raise ValueError('Необходимо указать никнейм')
        if not email:
            raise ValueError('Необходимо указать электронный адрес')
        if not password:
            raise ValueError('Необходимо указать пароль')

        user = self.model(
            username=username,
            email=self.normalize_email(email),
            is_active=True,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        """
        Creates and saves a superuser with the given username, email and password.
        """
        user = self.model(
            email=self.normalize_email(email),
        )
        user.set_password(password)
        user.is_active=True
        user.is_admin=True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(verbose_name='Электронный адрес', max_length=254, unique=True)
    username = models.CharField('Никнейм', max_length=75)
    firstname = models.CharField('Имя', max_length=75, blank=True)
    lastname = models.CharField('Фамилия', max_length=75, blank=True)
    is_active = models.BooleanField('Активен', default=True)
    is_admin = models.BooleanField('Администратор', default=False)
    is_developer = models.BooleanField('Разработчик', default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        