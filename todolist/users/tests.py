from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient
from users.models import User
from users.views import UserCustomViewSet


class TestUserViewSet(TestCase):

    def test_get_list_quest(self):
        """ APIRequestFactory - получение списка пользователей открыто только админам, разработчикам или владельцам проектов """
        factory = APIRequestFactory()
        request = factory.get('/api/users')
        view = UserCustomViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_detail_admin(self):
        """  APIClient - зарегистрирую админа для получения его же профиля """
        email = 'developer@todolist.com'
        password='testadmin'
        admin = User.objects.create_superuser(email=email, password=password)
        
        client = APIClient()
        client.login(email=email, password=password)
        response = client.get(f'/api/users/{admin.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
       
