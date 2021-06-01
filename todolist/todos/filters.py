from django_filters import rest_framework as filters, widgets
from .models import Project, ToDo


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
       model = Project
       fields = ['name']

class ToDoFilter(filters.FilterSet):
    date = filters.DateFromToRangeFilter(field_name='created_at', widget=widgets.RangeWidget(attrs={'type': 'date'}))
    project_name = filters.CharFilter(field_name='project__name', lookup_expr='contains')

    class Meta:
        model = ToDo
        fields = []
       