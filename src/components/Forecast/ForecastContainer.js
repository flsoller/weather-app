import React from 'react';
import styled from 'styled-components';

const StyledForecastContainer = styled.div`
  display: flex;
`;

function ForecastContainer({ children }) {
  return <StyledForecastContainer>{children}</StyledForecastContainer>;
}

export default ForecastContainer;
