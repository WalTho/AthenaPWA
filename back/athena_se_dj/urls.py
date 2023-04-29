"""arhena_SE URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from steam.views import steam_login
from discord.views import discord_login

urlpatterns = [
    path('admin/', admin.site.urls),

    # Auth api
    path('api-auth/', include('rest_framework.urls')),
    path('api-auth/steam-login/', steam_login, name='steam-login'),
    path('api-auth/discord-login/', discord_login, name='discord-login'),

    path('accounts/', include('accounts.urls')),
    path('steam/', include('steam.urls')),
    path('social-auth/', include('social_django.urls', namespace='social')),
]