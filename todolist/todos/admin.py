from django.contrib import admin
from todos.models import Project, ToDo

class ProjectAdmin(admin.ModelAdmin):
    pass
admin.site.register(Project, ProjectAdmin)

class ToDoAdmin(admin.ModelAdmin):
    pass
admin.site.register(ToDo, ToDoAdmin)
