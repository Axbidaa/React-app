import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Home Component
function Home() {
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
    <div className="home-content">
      <div className="title">
        My Weather App
      </div>
      <div className="welcome-message">
        <p>Welcome to my React application. This is a simple landing page of a weather widget app where users
          are able to see the relevant information about the weather. The application has two parts: the backend
          and the frontend. The backend is responsible for creating two api endpoints; weather info and
          motivational quote while the frontend is responsible for retrieving the information from the
          created endpoints.</p>
      </div>
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

// About Component
function About() {
  return (
    <div className="about-content">
      <div className="title">
        About the developer
      </div>
      <div className="about-text">
        <p className="about-text">
          My name is <strong>Mohammed Abidur Rashid</strong>, and I am a Software Engineering (Honours) graduate from Monash
          University Malaysia. I enjoy indulging in creativity, including web design, content creation, and graphic design.
          My passion for technology and creativity drives my work, making this project a reflection of my diverse skill set and
          interests.
        </p>
      </div>

    </div>
  );
}

// Main App Component with Navigation
function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <div className="App">
        {/* Hamburger Icon */}
        <div className="hamburger-icon" onClick={toggleNav}>
          &#9776;
        </div>

        {/* Navigation Sidebar */}
        <div className={`nav-sidebar ${isNavOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={toggleNav}>&times;</button>
          <nav>
            <Link to="/" onClick={toggleNav}>Home</Link>
            <Link to="/about" onClick={toggleNav}>About</Link>
          </nav>
        </div>

        {/* Routes */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
