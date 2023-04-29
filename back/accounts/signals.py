from django.db.models.signals import post_save, pre_delete
from django.contrib.auth.signals import (user_logged_in,
                                        user_logged_out,
                                        user_login_failed)
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import Profile


@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    print("Request finished!")
    if created:
        Profile.objects.create(user=instance)
