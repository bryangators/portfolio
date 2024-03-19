from rest_framework.test import APITestCase
from rest_framework import status
from rest_framework_simplejwt.tokens import AccessToken
from ..models import Project, CustomUser


class ProjectTestCase(APITestCase):  
    project_created_id = None
    
    def setUp(self):
        # Create a user
        self.user = CustomUser.objects.create_user(username='testuser', email='test@example.com', password='password')
        # Generate a JWT token for the user
        self.access_token = str(AccessToken.for_user(self.user))
        # Add JWT token to request headers
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access_token}')
        
        # Payload for creating a project
        self.project_data = {
            "title": "Sample Project",
            "short_desc": "This is a sample project",
            "display_img_path": "",
            "full_desc": "This is the full description of the sample project.",
            "date": "2022-03-17T12:00:00",
            "languages": ["Python", "JavaScript"],
            "technologies": ["Django", "React"]
        }
        
        self.client.post('/api/project/add/', self.project_data)
        
        self.new_project = Project.objects.last()
        self.new_project_id = self.new_project.id
        
    def test_create_project_successful(self):
                
        self.assertEqual(self.new_project.title, self.project_data['title'])
        self.assertEqual(self.new_project.short_desc, self.project_data['short_desc'])

    def test_update_project_successful(self):

        # Update data
        updated_data = {'title': 'Updated Test Project'}
        
        response = self.client.put(f'/api/project/update/{self.new_project_id}/', updated_data)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Reload the project from the database
        project = Project.objects.get(id=self.new_project_id)
        self.assertEqual(project.date, updated_data['title'])
        
        
        