from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.status import HTTP_204_NO_CONTENT

from .models import Project, ToDo, DISABLED
from .serializers import ProjectModelSerializer, ToDoModelSerializer
from .filters import ProjectFilter, ToDoFilter
from .permissions import CustomProjectPermission, CustomToDoPermission


class ProjectLimitOffsetPagination(LimitOffsetPagination):
   default_limit = 10   
class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter
    permission_classes = [CustomProjectPermission]


class ToDoLimitOffsetPagination(LimitOffsetPagination):
   default_limit = 20
class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    pagination_class = ToDoLimitOffsetPagination
    filterset_class = ToDoFilter
    permission_classes = [CustomToDoPermission]

    def destroy(self, request, *args, **kwargs):
        todo = self.get_object()
        todo.status = DISABLED
        todo.save()
        return Response(status=HTTP_204_NO_CONTENT)
    