from django.urls import path
from . import views

urlpatterns = [
    #patterns for project CRUD
    path('projects/', views.project_preview_view, name='projects'),
    path('project/<int:project_id>/', views.project_detail_view, name='project_detail'),
    path('project/add/', views.add_project_view, name='add_project'),
    path('project/update/<int:project_id>/', views.update_project_view, name='update_project'),
    path('project/delete/<int:project_id>/', views.project_delete_view, name='delete_project'),
    # patterns for login
    path('login/', views.login_view, name='login'),
    path('verify_token/', views.verify_token, name='verify'),
    #patterns for contact
    path('contact/', views.contact_form_submission, name='contact')
]