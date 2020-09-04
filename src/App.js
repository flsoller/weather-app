import React, { useState } from 'react';

import AppContainer from './components/AppContainer';
import DataContainer from './components/DataContainer';
import SearchBox from './components/SearchBox';
import ActiveLocation from './components/ActiveLocation';
import CurrentCondition from './components/CurrentCondition';
import ForecastContainer from './components/Forecast/ForecastContainer';

function App() {
  const [Weather, setWeather] = useState({ city: '', condition: '', temp: '' });

  const handleWeatherState = (input) => {
    console.log(input);
    setWeather({
      city: input.name,
      condition: input.weather[0].main,
      temp: input.main.temp,
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
