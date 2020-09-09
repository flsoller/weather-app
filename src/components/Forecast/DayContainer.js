import React from 'react';
import styled from 'styled-components';
import { celsiusConversion } from '../../App';

import { CloudIcon, RainIcon, SunIcon } from '../../styles/Icons';

const StyledDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4c4c4;
  opacity: 80%;
  margin: 5px;
  color: black;
  padding: 10px;
  min-width: 80px;
  font-size: 0.8rem;

  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledLine = styled.div`
  @media (min-width: 501px) {
    border-left: 4px solid;
    height: 45px;
    color: white;
    margin: 10px;
  }

  @media (max-width: 500px) {
    border-top: 4px solid;
    width: 50px;
    color: white;
    margin: 5px;
  }
`;

const StyledIconContainer = styled.div`
  margin-bottom: 15px;

  @media (max-width: 500px) {
    margin-bottom: 0px;
  }
`;

const StyledWeekdayContainer = styled.div`
  margin-top: 10px;

  @media (max-width: 500px) {
    margin-top: 0px;
  }
`;

function DayContainer({ maxTemp, minTemp, condition, weekday }) {
  const displayWeekday = (inputUNIX) => {
    let date = new Date(inputUNIX * 1000).getUTCDay();

    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    return weekdays[date];
  };

  return (
    <StyledDayContainer>
      <StyledIconContainer>
        {condition === 'Clear' ? <SunIcon /> : null}
        {condition === 'Rain' ? <RainIcon /> : null}
        {condition === 'Clouds' ? <CloudIcon /> : null}
      </StyledIconContainer>
      <p>{celsiusConversion(maxTemp).toFixed(0)}</p>
      <StyledLine></StyledLine>
      <p>{celsiusConversion(minTemp).toFixed(0)}</p>
      <StyledWeekdayContainer>{displayWeekday(weekday)}</StyledWeekdayContainer>
    </StyledDayContainer>
  );
}

export default DayContainer;
