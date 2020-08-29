import React from 'react';

import AppContainer from './components/AppContainer';
import DataContainer from './components/DataContainer';
import SearchBox from './components/SearchBox';
import ActiveLocation from './components/ActiveLocation';
import CurrentCondition from './components/CurrentCondition';
import Forecast from './components/Forecast';

function App() {
  return (
    <AppContainer>
      <DataContainer>
        <SearchBox></SearchBox>
        <div>
          <ActiveLocation></ActiveLocation>
          <CurrentCondition></CurrentCondition>
        </div>
        <Forecast></Forecast>
      </DataContainer>
    </AppContainer>
  );
}

export default App;
