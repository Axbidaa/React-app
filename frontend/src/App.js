import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    // Fetch weather data
    axios.get('http://localhost:8000/api/weather/')
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the weather data!', error);
      });

    // Fetch quote data
    axios.get('http://localhost:8000/api/quote/')
      .then(response => {
        setQuote(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the quote data!', error);
      });
  }, []);

  if (!weather || !quote) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <div className="weather-card">
        <h2>Weather in {weather.city}</h2>
        <h3>{weather.temperature}</h3>
        <p>{weather.description}</p>
        <p>Humidity: {weather.humidity}</p>
        <p>Wind Speed: {weather.wind_speed}</p>
      </div>
      <div className="quote-card">
        <h3>Motivational Quote</h3>
        <p>"{quote.quote}"</p>
        <p>- {quote.author}</p>
      </div>
    </div>
  );
}

export default App;
