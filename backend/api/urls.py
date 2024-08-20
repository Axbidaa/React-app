from django.urls import path
from .views import get_weather, get_quote

urlpatterns = [
    path('weather/', get_weather, name='get_weather'),
    path('quote/', get_quote, name='get_quote'),
]
