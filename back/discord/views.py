from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import redirect
from django.contrib.auth import login

@api_view(['GET'])
def discord_login(request):
    if request.user.is_authenticated:
        return Response({"detail": "Already logged in."}, status=status.HTTP_400_BAD_REQUEST)

    # Redirige vers l'URL d'authentification Discord
    return redirect('/social-auth/login/discord/')

