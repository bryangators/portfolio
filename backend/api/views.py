from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Project
from .serializers import ShortProjectSerializer, FullProjectSerializer
    
@api_view(['GET'])
def project_preview_view(request):
    projects = Project.objects.all()
    serializer = ShortProjectSerializer(projects, many=True)
    return Response(serializer.data)

# Using @api_view 
@api_view(['GET'])
def project_detail_view(request, project_id):
    try:
        project = get_object_or_404(Project, id=project_id)
        serializer = FullProjectSerializer(project)
        return Response(serializer.data)
    except Project.DoesNotExist:
        return Response({'message': 'Project not found'}, status=status.HTTP_404_NOT_FOUND)