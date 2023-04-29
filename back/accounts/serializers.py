from rest_framework import serializers
from .models import Profile
from django.contrib.auth.models import User
from social_django.models import UserSocialAuth

class UserSocialAuthSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSocialAuth
        fields = ('provider', 'extra_data', 'created')


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'email')



class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    providers = UserSocialAuthSerializer(source='user.social_auth', many=True)


    class Meta:
        model = Profile
        fields = ('user', 'providers' )