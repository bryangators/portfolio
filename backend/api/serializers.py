from rest_framework import serializers
from .models import Project

class ShortProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'short_desc', 'display_img_path', 'date', 'languages', 'technologies')
        
class FullProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'full_desc', 'date')