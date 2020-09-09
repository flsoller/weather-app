import React from 'react';
import styled from 'styled-components';

import DayContainer from './DayContainer';

const StyledForecastContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 75%;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 95%;
  }
`;

function ForecastContainer({ forecastDataArray }) {
  const renderForecast = forecastDataArray.map((daily) => (
    <DayContainer
      maxTemp={daily[0]}
      minTemp={daily[1]}
      condition={daily[2]}
      weekday={daily[3]}
      key={Math.random()}
    />
  ));

  return <StyledForecastContainer>{renderForecast}</StyledForecastContainer>;
}

export default ForecastContainer;
