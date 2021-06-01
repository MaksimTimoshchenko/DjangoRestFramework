from django.db import models

from users.models import User

class Project(models.Model):
   name = models.CharField(max_length=64)
   repository_url = models.URLField(max_length=200, blank=True)
   users = models.ManyToManyField(User, related_name='projects')

   def __str__(self):
        return self.name


DISABLED = 0
ENABLED = 1
STATUS_CHOICES = (
    (DISABLED, 'Disabled'),
    (ENABLED, 'Enabled'),
)
class ToDo(models.Model):
   text = models.TextField()
   status = models.BooleanField(choices=STATUS_CHOICES)
   created_at = models.DateTimeField(auto_now_add=True)
   modified_at = models.DateTimeField(auto_now=True)
   project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='todos')
   creator_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='todos')

   def __str__(self):
        return self.text
