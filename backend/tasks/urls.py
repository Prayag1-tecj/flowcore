from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import TaskViewSet, NoteViewSet

router = DefaultRouter()

router.register(
    "notes",
    NoteViewSet,
    basename="notes"
)

router.register(
    "",
    TaskViewSet,
    basename="tasks"
)

urlpatterns = [
    path("", include(router.urls)),
]