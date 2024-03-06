from rest_framework import serializers
from .models import Project, CustomUser

class ShortProjectDisplaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'short_desc', 'display_img_path', 'date', 'languages', 'technologies')
        
class ProjectDisplaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'full_desc', 'date')
        
class FullProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        exclude = ['id']
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email']  # Add more fields as needed