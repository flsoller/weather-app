import React, { useState } from 'react';

import AppContainer from './components/AppContainer';
import DataContainer from './components/DataContainer';
import SearchBox from './components/SearchBox';
import ActiveLocation from './components/ActiveLocation';
import CurrentCondition from './components/CurrentCondition';
import ForecastContainer from './components/Forecast/ForecastContainer';

const celsiusConversion = (value) => value - 273.15;

function App() {
  const [Weather, setWeather] = useState({ city: '', condition: '', temp: '' });
  //const [forecast, setForecast] = useState();

  // set state to API response for selected values.
  const handleWeatherState = (input) => {
    console.log(input);
    setWeather({
      city: input.name,
      condition: input.weather[0].main + ', ',
      // Directly coverts API response from Kelvin to °C
      temp: celsiusConversion(input.main.temp).toFixed(0) + ' °C',
    });
  };

  return (
    <AppContainer>
      <DataContainer>
        <SearchBox handleWeatherState={handleWeatherState}></SearchBox>
        <div>
          <ActiveLocation location={Weather.city}></ActiveLocation>
          <CurrentCondition
            condition={Weather.condition}
            temp={Weather.temp}
          ></CurrentCondition>
        </div>
        <ForecastContainer></ForecastContainer>
      </DataContainer>
    </AppContainer>
  );
}

export default App;
