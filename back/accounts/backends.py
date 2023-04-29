from social_core.exceptions import AuthAlreadyAssociated
from social_core.backends.steam import SteamOpenId
from social_core.backends.discord import DiscordOAuth2

class CustomSteamOpenId(SteamOpenId):
    def social_auth(self, uid):
        try:
            return super().social_auth(uid)
        except AuthAlreadyAssociated:
            return self.strategy.storage.user.get_social_auth_for_user(self.user, self.name)


class CustomDiscordOAuth2(DiscordOAuth2):
    def social_auth(self, uid):
        try:
            return super().social_auth(uid)
        except AuthAlreadyAssociated:
            return self.strategy.storage.user.get_social_auth_for_user(self.user, self.name)
