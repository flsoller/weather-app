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
    console.log(input);
    setForecast([
      [
        input.daily[1].temp.max,
        input.daily[1].temp.min,
        input.daily[1].weather[0].main,
        input.daily[1].dt,
      ],
      [
        input.daily[2].temp.max,
        input.daily[2].temp.min,
        input.daily[2].weather[0].main,
        input.daily[2].dt,
      ],
      [
        input.daily[3].temp.max,
        input.daily[3].temp.min,
        input.daily[3].weather[0].main,
        input.daily[3].dt,
      ],
      [
        input.daily[4].temp.max,
        input.daily[4].temp.min,
        input.daily[4].weather[0].main,
        input.daily[4].dt,
      ],
      [
        input.daily[5].temp.max,
        input.daily[5].temp.min,
        input.daily[5].weather[0].main,
        input.daily[5].dt,
      ],
    ]);
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
