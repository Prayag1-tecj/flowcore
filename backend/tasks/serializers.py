from rest_framework import serializers

from .models import Task, Note


class TaskSerializer(serializers.ModelSerializer):

    created_by = serializers.ReadOnlyField(
        source="created_by.username"
    )

    class Meta:
        model = Task

        fields = [
            "id",
            "title",
            "description",
            "status",
            "due_date",
            "created_by",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "created_by",
            "created_at",
            "updated_at",
        ]

class NoteSerializer(serializers.ModelSerializer):

    created_by = serializers.ReadOnlyField(
        source="created_by.username"
    )

    class Meta:
        model = Note

        fields = [
            "id",
            "task",
            "content",
            "created_by",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "created_by",
            "created_at",
            "updated_at",
        ]