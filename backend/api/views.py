from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate, login
from .models import Project
from .serializers import ShortProjectDisplaySerializer, ProjectDisplaySerializer, UserSerializer, ProjectSerializer, FullProjectSerializer
import logging

logger = logging.getLogger(__name__)
    
@api_view(['GET'])
@permission_classes([AllowAny])
def project_preview_view(request):
    projects = Project.objects.all()
    serializer = ShortProjectDisplaySerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def project_detail_view(request, project_id):
    mode = request.query_params.get('mode', 'default_value')
    
    try:
        project = get_object_or_404(Project, id=project_id)
        
        if mode == 'full':
            serializer = FullProjectSerializer(project)
        else:
            serializer = ProjectDisplaySerializer(project)
            
        return Response(serializer.data)
    except Project.DoesNotExist:
        return Response({'message': 'Project not found'}, status=status.HTTP_404_NOT_FOUND)
        
@api_view(['POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def add_project_view(request):
    # Your existing logic for handling the form data and creating a new project
    try:
        print(request.data)
        # Assuming you have a serializer for your project data
        serializer = ProjectSerializer(data=request.data)
        
        if serializer.is_valid():
            # Save the project with the authenticated user as the owner
            serializer.save()
            return Response({'message': 'Project created successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({'error': str(e), 'data': request.data}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['PUT'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def update_project_view(request, project_id):
    try:
        # Retrieve the existing project instance
        project = get_object_or_404(Project, id=project_id)

        serializer = ProjectSerializer(instance=project, data=request.data, partial=True)

        if serializer.is_valid():
            # Save the updated project
            serializer.save()
            return Response({'message': 'Project updated successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['DELETE'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def project_delete_view(request, project_id):
    try:
        project = get_object_or_404(Project, id=project_id)
        project.delete()
        return Response({'message': 'Project deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        print(str(e))
        return Response({'message': 'Project not found'}, status=status.HTTP_404_NOT_FOUND)
    

# Views for Login and Authorization  
@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    # Extract username and password from the request data
    username = request.data.get('username')
    password = request.data.get('password')

    # Authenticate the user
    user = authenticate(request, username=username, password=password) 

    if user is not None:
        login(request, user)
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user': UserSerializer(user).data
        })
    else:
        return Response({'error': 'Invalid credentials'}, status=400)
    
@api_view(['GET'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def verify_token(request):
    return Response({'message': 'Token is valid'})