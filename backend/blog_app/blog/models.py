from django.db import models
from django.contrib.auth.models import User
from tinymce.models import HTMLField

class BlogTag(models.Model):
    title = models.CharField(max_length=50, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Blog(models.Model):
    title = models.CharField(max_length=50, unique=True)
    content = HTMLField()
    cover = models.ImageField(null=True, blank=True)
    author = models.ForeignKey(User, related_name="blog_author", on_delete=models.CASCADE)
    tags = models.ManyToManyField(BlogTag, related_name="blog_tag")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    comments_number = models.IntegerField()

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return f"{self.title} - {self.author.username}"

class BlogComment(models.Model):
    blog = models.ForeignKey(Blog, related_name="blog_comments", on_delete=models.CASCADE)
    comment = models.TextField()
    name = models.CharField(max_length=255, default="Anonymous")
    ip = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return f"{self.blog.title} - {self.name}"

class LatestPost(models.Model):
    tags = models.ManyToManyField(BlogTag, related_name="latest_post")
    title = models.CharField(max_length=50)
