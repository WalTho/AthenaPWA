from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import redirect
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from social_django.utils import load_strategy, load_backend
from social_core.exceptions import MissingBackend, AuthException

@login_required
def verify_steam_identity(request):
    strategy = load_strategy(request)
    backend_name = 'steam'
    try:
        backend = load_backend(strategy, backend_name, redirect_uri=None)
    except MissingBackend:
        return JsonResponse({'error': 'MissingBackend', 'message': 'Le backend d\'authentification n\'est pas correct.'}, status=400)

    try:
        steam_id = backend.verify_identity(request)
        return JsonResponse({'steam_id': steam_id})
    except AuthException as e:
        return JsonResponse({'error': 'AuthException', 'message': str(e)}, status=400)


# Auth api login view
@api_view(['GET'])
def steam_login(request):
    if request.user.is_authenticated:
        return Response({"detail": "Already logged in."}, status=status.HTTP_400_BAD_REQUEST)

    # Redirige vers l'URL d'authentification Steam
    return redirect('/social-auth/login/steam/')