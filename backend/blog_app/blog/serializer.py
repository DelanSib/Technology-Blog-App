from rest_framework import serializers
from .models import (BlogTag, Blog, BlogComment, LatestPost, )
from user.serializer import UserSerializer

class BlogTagSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogTag
        fields = ('title', )


class BlogSerializer(serializers.ModelSerializer):
    tags = BlogTagSerializer(many=True)
    author = UserSerializer(read_only=True)
    author_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Blog
        fields = "__all__"


class BlogCommentSerializer(serializers.ModelSerializer):
    tags = BlogSerializer(read_only=True)
    blog_id = serializers.IntegerField(write_only=True)
    author = UserSerializer(read_only=True)
    author_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = BlogComment
        fields = "__all__"


class LatestPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = LatestPost
        fields = "__all__"