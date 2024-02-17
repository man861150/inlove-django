# profiles/urls.py
from django.urls import path
from .views import index, profile

urlpatterns = [
    path('', index, name='home'),
    path('profile/', profile, name='profile')
]
