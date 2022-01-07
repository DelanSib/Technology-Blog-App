from django.contrib import admin
from .models import (BlogTag, Blog, BlogComment, LatestPost, )

admin.site.register((BlogTag, Blog, BlogComment, LatestPost,))


