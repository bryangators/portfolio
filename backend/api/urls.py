from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.project_preview_view, name='projects'),
    path('project/<int:project_id>/', views.project_detail_view, name='project_detail'),
    path('add_project/', views.add_project_view, name='add_project'),
    path('update_project/<int:project_id>/', views.update_project_view, name='update_project'),
    path('login/', views.login_view, name='login'),
    path('verify_token/', views.verify_token, name='verify')
]