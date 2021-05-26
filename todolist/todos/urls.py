from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import ProjectModelViewSet, ToDoModelViewSet


projects_router = DefaultRouter()
projects_router.register('', ProjectModelViewSet)

todos_router = DefaultRouter()
todos_router.register('', ToDoModelViewSet)
