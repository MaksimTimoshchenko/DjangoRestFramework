from rest_framework.permissions import BasePermission


class CustomUserPermission(BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            if request.user.is_admin:
                return True
            elif view.action in ['list', 'retrieve']:
                if request.user.is_developer or request.user.projects.all()[:1]:
                    return True
        return False