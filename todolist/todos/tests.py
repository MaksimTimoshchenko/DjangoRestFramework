from rest_framework import status
from rest_framework.test import APITestCase
from mixer.backend.django import mixer
from users.models import User
from todos.models import ToDo, Project

class TestToDoViewSet(APITestCase):
    
    def test_get_list(self):
        """ APITestCase - зарегистрирую админа, который создаст проект и к нему привяжу ToDo """
        email = 'developer@todolist.com'
        password='testadmin'
        admin = User.objects.create_superuser(email=email, password=password)
        self.client.login(email=email, password=password)
        response = self.client.get(f'/api/users/{admin.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        project = mixer.blend(Project, name='Test Admin Project')
        response = self.client.get(f'/api/projects/{project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        project = Project.objects.get(id=project.id)
        self.assertEqual(project.name, 'Test Admin Project')

        todo = mixer.blend(ToDo, project=project, creator_user=admin)
        response = self.client.get(f'/api/todos/{todo.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        todo = ToDo.objects.get(id=todo.id)
        self.assertEqual(todo.project, project)
        self.assertEqual(todo.creator_user, admin)        
