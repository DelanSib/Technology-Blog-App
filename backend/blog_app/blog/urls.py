from django.conf import settings
from django.urls import include, path
from django.conf.urls.static import static
from rest_framework_nested import routers
from .views import CategoryView, BlogView

router = routers.DefaultRouter()
router.register(r'category', CategoryView)

blogs_router = routers.NestedDefaultRouter(router, r'category', lookup='category')
blogs_router.register(r'blogs', BlogView, basename='blog')

urlpatterns = [
        path('__debug__/', include('debug_toolbar.urls')),
        path('api/', include('rest_framework.urls')),
        path(r'', include(router.urls)),
        path(r'', include(blogs_router.urls)),
     
    
    
]