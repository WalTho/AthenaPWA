from django.urls import include, path
from .views import CurrentUserView, link_social_account, delete_account
urlpatterns = [
    path('profile/', CurrentUserView.as_view(), name='current_user'),
    # path('bio/<username>/', views.bio, name='bio'),
    path('link-social/<str:backend>/', link_social_account, name='link_social_account'),
    path('delete-account/', delete_account, name='delete_account'),

]