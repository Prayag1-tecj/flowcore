from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet

from .models import Task, Note
from .permissions import IsAdminOrOwner
from .serializers import TaskSerializer, NoteSerializer


class TaskViewSet(ModelViewSet):

    serializer_class = TaskSerializer

    permission_classes = [
        IsAuthenticated,
        IsAdminOrOwner,
    ]

    def get_queryset(self):

        if self.request.user.role == "ADMIN":
            return Task.objects.all()

        return Task.objects.filter(
            created_by=self.request.user
        )

    def perform_create(self, serializer):

        serializer.save(
            created_by=self.request.user
        )

class NoteViewSet(ModelViewSet):

    serializer_class = NoteSerializer

    permission_classes = [
        IsAuthenticated,
        IsAdminOrOwner,
    ]

    def get_queryset(self):

        if self.request.user.role == "ADMIN":
            return Note.objects.all()

        return Note.objects.filter(
            created_by=self.request.user
        )

    def perform_create(self, serializer):

        serializer.save(
            created_by=self.request.user
        )