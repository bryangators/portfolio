from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.project_preview_view, name='projects'),
    path('project/<int:project_id>/', views.project_detail_view, name='project_detail'),
]