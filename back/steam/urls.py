# urls.py
from django.urls import path
from . import views

urlpatterns = [
    # ...
    path('verify/', views.verify_steam_identity, name='verify_steam_identity'),
    ]
