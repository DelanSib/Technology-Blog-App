from unicodedata import category
from django.db import models
from core.models import User
from taggit.managers import TaggableManager

    
class Blog(models.Model):
    CATEGORIES = (
        ('Artificial Intelligence', 'Artificial Intelligence'),
        ('Gadgets', 'Gadgets'),
        ('Robotics', 'Robotics'),
        ('IoT', 'IoT')
    )
    title = models.CharField(max_length=255, unique = True)
    category = models.CharField(max_length = 255, choices = CATEGORIES, blank = False)
    content = models.TextField()
    author = models.ForeignKey(User, verbose_name = 'the author', on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add = True)
    tags = TaggableManager()
    image = models.ImageField(upload_to = 'media/images', null = True)
    
    def __str__(self):
        return self.title
    
class Comment(models.Model):
    name = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    blog_post_title = models.ForeignKey(Blog, on_delete=models.CASCADE, null=True)
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add = True)
    

    