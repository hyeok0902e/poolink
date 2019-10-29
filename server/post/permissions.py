from rest_framework.permissions import BasePermission

class IsOwnerOrReadOnly(BasePermission):
    message = 'You must be the owner'
    safe_method = ['GET', 'PUT', 'DELETE']

    def has_permission(self, request, view):
        if request.method in self.safe_method:
            return True
        return False

    def has_object_permission(self, request, view, obj):
        if request.user.is_admin:
            return True
        if request.method in self.safe_method and obj.user == request.user:
            return True
        return False