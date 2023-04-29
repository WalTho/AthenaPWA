from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from social_core.exceptions import AuthAlreadyAssociated
from rest_framework.exceptions import APIException
from rest_framework import status

User = get_user_model()

class AuthAlreadyAssociated(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = 'Your Discord account is already associated with another Steam account.'
    default_code = 'steam_auth_already_associated'

def custom_exception_handler(exc, context):
    if isinstance(exc, AuthAlreadyAssociated):
        return SteamAuthAlreadyAssociated()
    return None
