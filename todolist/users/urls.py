from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import UserCustomViewSet

app_name = 'users'

router = DefaultRouter()
router.register('', UserCustomViewSet)
