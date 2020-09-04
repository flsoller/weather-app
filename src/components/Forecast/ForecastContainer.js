import React from 'react';
import styled from 'styled-components';

import DayContainer from './DayContainer';

const StyledForecastContainer = styled.div`
  display: flex;
`;

function ForecastContainer() {
  return (
    <StyledForecastContainer>
      <DayContainer></DayContainer>
      <DayContainer></DayContainer>
    </StyledForecastContainer>
  );
}

export default ForecastContainer;
