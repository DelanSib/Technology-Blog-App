from rest_framework import serializers
from .models import Blog, Comment
 
class BlogSerializer(serializers.Serializer):
    class Meta:
        model = Blog
        fields = ["title", "content", "author", "category", "tags","date_created", "image"]
        
class CommentSerializer(serializers.Serializer):
    class Meta:
        model = Comment
        fields = ["content", "name", "title", "date_created"]
        