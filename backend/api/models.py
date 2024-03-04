from django.db import models

class Project(models.Model):
    id = models.AutoField(primary_key=True)
    short_desc = models.CharField(max_length=255)  # Adjust max_length if needed
    display_img_path = models.CharField(max_length=255, blank=True, null=True)
    full_desc = models.TextField() 
    date = models.DateTimeField(auto_now_add=True)  # Automatically set on creation
