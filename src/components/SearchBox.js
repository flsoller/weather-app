import React, { useState } from 'react';

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

function SearchBox({ handleWeatherState, handleForecastState }) {
  // React useState hook for input state
  const [Input, setInput] = useState('');

  // Text input change handler
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // API fetch call.
    const API = '01da4e3c10ff2e0357130a2f1c9772a9';
    let lat;
    let lon;

    // First fetch call to get current condition.
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${Input}&APPID=${API}`
    )
      .then((response) => response.json())
      .then((response) => {
        response.cod === 200
          ? handleWeatherState(response)
          : alert(response.message);
        lat = response.coord.lat;
        lon = response.coord.lon;
        // Extracted latitude and longitude, 2nd fetch call to get forecast data.
        fetch(
          `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${API}`
        )
          .then((response) => response.json())
          .then((response) => handleForecastState(response))
          .catch((err) => alert(err));
      })
      .catch((err) => alert(err));

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
          type="text"
          id="input"
          name="input"
          placeholder="Enter city ..."
          autoComplete="off"
          value={Input}
        ></StyledInput>
      </form>
    </div>
  );
}

export default SearchBox;
