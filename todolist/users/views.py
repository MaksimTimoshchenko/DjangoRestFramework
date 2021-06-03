from rest_framework.authentication import BasicAuthentication
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.viewsets import GenericViewSet
from .models import User
from .serializers import UserModelSerializer
from .permissions import CustomUserPermission


class UserCustomViewSet(ListModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    permission_classes = [CustomUserPermission]
    authentication_classes = [BasicAuthentication]
    