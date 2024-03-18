from django.test import TestCase
from rest_framework.test import APIClient
from ..models import CustomUser


class LoginTest(TestCase):
    client = APIClient()

    def setUp(self):
        # Create a test user if it doesn't exist already
        CustomUser.objects.create_user('test', 'test@examle.com', 'password')

    def test_login_successful(self):
        # Perform the POST request to the login API endpoint
        response = self.client.post('/api/login/', {'username': 'test', 'password': 'password'})

        # Assert that the response status code is 200 (OK)
        self.assertEqual(response.status_code, 200)

        # Parse the JSON response
        response_data = response.json()

        # Check if the 'access' token is present in the response
        self.assertTrue('access' in response_data)
        
    def test_login_failed_with_invalid_credentials(self):
        # Make an API call with invalid credentials (wrong password)
        response = self.client.post('/api/login/', {'username': 'test', 'password': 'wrong_password'})

        # Assert that the response status code is 400 (Bad Request)
        self.assertEqual(response.status_code, 400)

        # Parse the JSON response
        response_data = response.json()

        # Check if the error message is present and contains the correct field with invalid input
        self.assertIn('error', response_data)
        self.assertEqual(response_data['error'], 'Invalid credentials')
