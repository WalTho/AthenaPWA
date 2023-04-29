# pipelines.py

from social_core.backends.steam import SteamOpenId
from social_core.exceptions import AuthException
import requests


def get_steam_user_details(backend, details, response, user=None, *args, **kwargs):
    if isinstance(backend, SteamOpenId):
        steam_id = kwargs['uid']
        api_key = backend.setting("API_KEY")

        if not steam_id or not api_key:
            raise AuthException(backend, "Unable to retrieve Steam ID or API key.")

        url = f"http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key={api_key}&steamids={steam_id}"
        response = requests.get(url)

        if response.status_code == 200:
            data = response.json()
            player = data['response']['players'][0]

            user.email = player.get('loccountrycode', '')
            user.first_name = player.get('realname', '')
            user.last_name = ''

            user.save()
        else:
            raise AuthException(backend, "Unable to retrieve Steam user details.")
