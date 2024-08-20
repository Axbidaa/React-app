from rest_framework.response import Response
from rest_framework.decorators import api_view

# Simulating weather data
@api_view(['GET'])
def get_weather(request):
    
    weather_data = {
        "city": "Dubai",
        "temperature": "35°C",
        "description": "Sunny",
        "humidity": "30%",
        "wind_speed": "10 km/h"
    }
    return Response(weather_data)

# Simulating a motivational quote
@api_view(['GET'])
def get_quote(request):
    
    quote_data = {
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde"
    }
    return Response(quote_data)
