import React from 'react';
import styled from 'styled-components';

const StyledDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4c4c4;
  opacity: 70%;
  margin: 10px;
  color: black;
  padding: 10px;
`;

const StyledLine = styled.div`
  border-left: 4px solid;
  height: 45px;
  color: white;
  margin: 10px;
`;

function DayContainer() {
  return (
    <StyledDayContainer>
      <p>High</p>
      <StyledLine></StyledLine>
      <p>Low</p>
    </StyledDayContainer>
  );
}

export default DayContainer;
