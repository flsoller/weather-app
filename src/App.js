import React, { useState } from 'react';

import AppContainer from './components/AppContainer';
import DataContainer from './components/DataContainer';
import SearchBox from './components/SearchBox';
import ActiveLocation from './components/ActiveLocation';
import CurrentCondition from './components/CurrentCondition';
import ForecastContainer from './components/Forecast/ForecastContainer';

export const celsiusConversion = (value) => value - 273.15;

function App() {
  const [weather, setWeather] = useState({ city: '', condition: '', temp: '' });
  const [forecast, setForecast] = useState([]);

  // Set current weather state to API response.
  const handleWeatherState = (input) => {
    setWeather({
      city: input.name,
      condition: input.weather[0].main + ', ',
      // Directly converts API response from Kelvin to °C
      temp: celsiusConversion(input.main.temp).toFixed(0) + ' °C',
    });
  };

  // Set forecast state to API response.
  const handleForecastState = (input) => {
    setForecast(
      input.daily.slice(0, 5).map((daily) => {
        return [
          daily.temp.min,
          daily.temp.max,
          daily.weather[0].main,
          daily.dt,
        ];
      })
    );
  };

  return (
    <AppContainer>
      <DataContainer>
        <SearchBox
          handleWeatherState={handleWeatherState}
          handleForecastState={handleForecastState}
        ></SearchBox>
        <div>
          <ActiveLocation location={weather.city}></ActiveLocation>
          <CurrentCondition
            condition={weather.condition}
            temp={weather.temp}
          ></CurrentCondition>
        </div>
        <ForecastContainer forecastDataArray={forecast}></ForecastContainer>
      </DataContainer>
    </AppContainer>
  );
}

export default App;
