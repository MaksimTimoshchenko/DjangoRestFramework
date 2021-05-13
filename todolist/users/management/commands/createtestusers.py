import random
import string

from django.core.management.base import BaseCommand
from django.utils.crypto import get_random_string


from users.models import User

class Command(BaseCommand):
    help = 'Создает ранломных пользователей'

    def add_arguments(self, parser):
        parser.add_argument('total', type=int, help='Количество юзеров, которое нужно создать')
        parser.add_argument('-a', '--admin', action='store_true', help='Ключ для создания админского аккаунта')

    def handle(self, *args, **kwargs):
        total = kwargs['total']
        admin = kwargs['admin']

        for i in range(total):
            email = self.random_char(7) + '@gmail.com'
            if admin:
                User.objects.create_superuser(email=email, password='password')
            else:
                username = get_random_string()
                User.objects.create_user(username=username, email=email, password='password')

    def random_char(self, char_length):
       return ''.join(random.choice(string.ascii_letters) for x in range(char_length))
       