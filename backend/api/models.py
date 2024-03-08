from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import AbstractUser

class Project(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, blank=True, null=True) 
    short_desc = models.CharField(max_length=255) 
    display_img_path = models.CharField(max_length=255, blank=True, null=True)
    full_desc = models.TextField() 
    date = models.DateTimeField(auto_now_add=True)  
    languages = ArrayField(models.CharField(max_length=50), blank=True, null=True) 
    technologies = ArrayField(models.CharField(max_length=50), blank=True, null=True) 
    
    # models.py

class CustomUser(AbstractUser):
    # Add any additional fields you need
    pass
