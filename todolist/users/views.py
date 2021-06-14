from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.decorators import action
from .models import User
from .serializers import UserModelSerializer, UserModelWithStatusesSerializer
from .permissions import CustomUserPermission


class UserCustomViewSet(ListModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = User.objects.all()
    # serializer_class = UserModelSerializer
    permission_classes = [CustomUserPermission]
    
    @action(methods=['get'], detail=False)
    def me(self, request):
        serializer = self.get_serializer_class()
        data = serializer(request.user).data
        return Response(data, status=HTTP_200_OK)

    def get_serializer_class(self):
        if self.request.version == '2.0':
            return UserModelWithStatusesSerializer
        return UserModelSerializer
        