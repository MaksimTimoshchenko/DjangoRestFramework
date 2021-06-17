import graphene
from graphene_django import DjangoObjectType
from users.models import User
from todos.models import ToDo, Project


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'

class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'

class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'

class Query(graphene.ObjectType):
    all_todos = graphene.List(ToDoType)
    all_users = graphene.List(UserType)
    all_projects = graphene.List(ProjectType)
    user_by_id = graphene.Field(UserType, id=graphene.Int(required=True))
    projects_by_todos_text = graphene.List(ProjectType, text=graphene.String(required=False))

 
    def resolve_all_todos(root, info):
        return ToDo.objects.all()

    def resolve_all_users(root, info):
        return User.objects.all()
    
    def resolve_all_projects(root, info):
        return Project.objects.all()

    def resolve_user_by_id(self, info, id):
        try:
            return User.objects.get(id=id)
        except User.DoesNotExist:
            return None

    def resolve_projects_by_todos_text(self, info, text=None):
        projects = Project.objects.all()
        if text:
            projects = projects.filter(todos__text=text)
        return projects


class ProjectMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        id = graphene.ID()

    project = graphene.Field(ProjectType)

    @classmethod
    def mutate(cls, root, info, name, id):
        project = Project.objects.get(pk=id)
        project.name = name
        project.save()
        return ProjectMutation(project=project)

class Mutation(graphene.ObjectType):
    update_project = ProjectMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
