import React, { useState, useRef, useEffect } from 'react';

import styled from 'styled-components';
import { SearchIcon } from '../styles/Icons';

// Styled Components
const StyledInput = styled.input`
  text-align: center;
  outline: none;
  width: 250px;
  height: 35px;
  border-radius: 50px;
  opacity: 65%;
  font-size: 1.2rem;
  padding: 0px 30px;
`;

const StyledIconContainer = styled.div`
  position: absolute;
  margin: 5px 0px 0px 5px;
  z-index: 1;
`;

// API detail. Would be in environment file if implemented with server. Just for demo.
const API = '01da4e3c10ff2e0357130a2f1c9772a9';

function SearchBox({ handleWeatherState, handleForecastState }) {
  // state hook for input state
  const [input, setInput] = useState('');

  // Text input change handler
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // useRef for input field.
  const inputFocus = useRef(null);

  // useEffect to trigger focus on input field after render.
  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  // Async function gets weather data for location.
  async function getLocationWeather(url) {
    let response = await fetch(url);
    let weatherData = await response.json();

    weatherData.cod === 200
      ? handleWeatherState(weatherData)
      : alert(weatherData.message);

    return weatherData;
  }

  // Async function gets forecast data. Depends on data from getLocationWeather. Limitation of API.
  async function getAllWeatherData() {
    let weatherData = await getLocationWeather(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${API}`
    );

    try {
      // Extract data needed for fetching forecast data.
      let testLat = weatherData.coord.lat;
      let testLon = weatherData.coord.lon;

      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${testLat}&lon=${testLon}&exclude=minutely,hourly&appid=${API}`
      );
      let forecastData = await response.json();

      handleForecastState(forecastData);
    } catch {
      alert('Getting forecast failed.');
    }
  }

  // Handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    getAllWeatherData();
    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StyledIconContainer>
          <SearchIcon />
        </StyledIconContainer>
        <StyledInput
          onChange={handleChange}
          ref={inputFocus}
          type="text"
          id="input"
          name="input"
          placeholder="Enter city ..."
          autoComplete="off"
          value={input}
        ></StyledInput>
      </form>
    </div>
  );
}

export default SearchBox;
