from django.urls import path, include
from .views import (BlogView, BlogCommentView, BlogTagView, LatestPostView, )
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('blogs', BlogView)
router.register('blog_comments', BlogCommentView)
router.register('blog_tags', BlogTagView)
router.register('latest_post_view', LatestPostView)

urlpatterns = [
    path('', include(router.urls))
]