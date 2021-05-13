from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import UserModelViewSet

app_name = 'users'

router = DefaultRouter()
router.register('', UserModelViewSet)
