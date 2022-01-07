from .serializer import (Blog, BlogTag, BlogComment, BlogSerializer,
                         BlogTagSerializer, BlogCommentSerializer,
                         LatestPost,LatestPostSerializer, )
from rest_framework.viewsets import ModelViewSet

class BlogView(ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BlogTagView(ModelViewSet):
    queryset = BlogTag.objects.all()
    serializer_class = BlogTagSerializer

class BlogCommentView(ModelViewSet):
    queryset = BlogComment.objects.all()
    serializer_class = BlogCommentSerializer

class LatestPostView(ModelViewSet):
    queryset = LatestPost.objects.all()
    serializer_class = LatestPostSerializer
