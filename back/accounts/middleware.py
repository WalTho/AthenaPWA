from django.http import JsonResponse
from social_core.exceptions import AuthAlreadyAssociated
from social_django.models import UserSocialAuth
from rest_framework.exceptions import NotAuthenticated

class SocialAuthExceptionMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response

    def process_exception(self, request, exception):
        if isinstance(exception, AuthAlreadyAssociated):
            data = {
                'error': 'AuthAlreadyAssociated',
                'message': 'This account is already in use.'
            }
            return JsonResponse(data, status=400)

        elif isinstance(exception, NotAuthenticated):
            data = {
                'error': 'NotAuthenticated',
                'message': 'Authentication credentials were not provided.'
            }
            return JsonResponse(data, status=401)

        return None

