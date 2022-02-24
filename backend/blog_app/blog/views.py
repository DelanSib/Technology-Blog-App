from django.shortcuts import render
from rest_framework import viewsets
from .models import Blog, Comment
from .serializers import BlogSerializer

class CategoryView(viewsets.ModelViewSet):
    queryset = Blog.objects.filter()
    serializer_class = BlogSerializer

class BlogView(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    
    
    #def comment(request):
        