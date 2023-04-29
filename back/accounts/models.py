from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from social_django.models import UserSocialAuth
# Create your models here

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def get_social_link(self):
        return UserSocialAuth.objects.filter(user=self.user)

    def __str__(self):
        return self.user.username

class TransfertSocial(models.Model):
    user_demande = models.ForeignKey(User, on_delete=models.CASCADE, related_name='transferts_demande')
    user_cible = models.ForeignKey(User, on_delete=models.CASCADE, related_name='transferts_cible')
    created_at = models.DateTimeField(auto_now_add=True)

    termine = models.BooleanField()

    class Meta:
        unique_together = ('user_demande', 'user_cible')

    def __str__(self):
        return f"{self.user_demande.username} - {self.user_cible.username}"



@receiver(post_save, sender=User)
def update_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
        instance.profile.save()


