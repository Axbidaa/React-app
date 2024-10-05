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
      <div className="title fade-in-title">
        My Weather App
      </div>
      <div className="welcome-message fade-in-content">
        <p>Welcome to my React application. This is a simple landing page of a weather widget app where users
          are able to see the relevant information about the weather. The application has two parts: the backend
          and the frontend. The backend is responsible for creating two api endpoints; weather info and
          motivational quote while the frontend is responsible for retrieving the information from the
          created endpoints.</p>
      </div>
      <div className="weather-card fade-in-content">
        <h2>Weather in {weather.city}</h2>
        <h3 className="temperature">{weather.temperature}</h3>
        <p>{weather.description}</p>
        <p>Humidity: {weather.humidity}</p>
        <p>Wind Speed: {weather.wind_speed}</p>
      </div>
      <div className="quote-card fade-in-content">
        <h3>Motivational Quote</h3>
        <p>"{quote.quote}"</p>
        <p>- {quote.author}</p>
      </div>
    </div>
  );
}

export default App;
