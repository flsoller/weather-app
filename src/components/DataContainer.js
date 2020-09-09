import React from 'react';
import styled from 'styled-components';

import bgImage from '../assets/app-bg-clouds.jpg';

const StyledDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${bgImage});
  background-size: cover;
  background-position: top;
  width: 70%;
  height: 75%;
  justify-content: space-around;
  align-items: center;
  border-radius: 50px;

  @media (max-width: 500px) {
    background-size: inherit;
    background-repeat: no-repeat;
    border-radius: 0px;
    height: 100%;
    width: 100%;
  }

  @media (max-height: 425px) {
    background-position: center;
  }
`;

function DataContainer({ children }) {
  return <StyledDataContainer>{children}</StyledDataContainer>;
}

export default DataContainer;
