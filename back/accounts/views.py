from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from accounts.models import Profile
from rest_framework import permissions
from django.contrib.auth.models import User
from .serializers import ProfileSerializer
from django.contrib.auth.decorators import login_required
from social_django.utils import load_strategy, load_backend
from social_core.exceptions import MissingBackend
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

@login_required
def link_social_account(request, backend):
    strategy = load_strategy(request)
    try:
        backend = load_backend(strategy, backend, redirect_uri=None)
    except MissingBackend:
        return HttpResponse("Erreur : Le backend d'authentification n'est pas correct.", status=400)

    try:
        backend.social_auth(request.user.id)
        messages.success(request, f'Compte {backend.name} lié avec succès !')
    except AuthAlreadyAssociated:
        messages.error(request, f'Erreur : Ce compte {backend.name} est déjà lié à un autre utilisateur.')

    return HttpResponseRedirect(reverse('your_view'))



class CurrentUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        u = User.objects.get(pk=request.user.pk)
        profil = Profile.objects.get(user=u)
        serializer = ProfileSerializer(profil)
        return Response(serializer.data)


@login_required
@csrf_exempt
@require_http_methods(["DELETE"])
def delete_account(request):
    user = request.user
    user.delete()
    return JsonResponse({"message": "User account successfully deleted."})


