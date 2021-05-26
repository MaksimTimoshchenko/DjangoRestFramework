from rest_framework.fields import ReadOnlyField
from rest_framework.serializers import ModelSerializer

from .models import Project, ToDo
from users.serializers import UserModelSerializer


class ProjectModelSerializer(ModelSerializer):
    users = UserModelSerializer(source='project', many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'

class ToDoModelSerializer(ModelSerializer):
    project = ProjectModelSerializer()
    creator_user = UserModelSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'
