import React from 'react';
import styled from 'styled-components';

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  min-height: 550px;

  /* @media (max-width: 500px) {
    height: 70vh;
  } */
`;

function AppContainer({ children }) {
  return <StyledAppContainer>{children}</StyledAppContainer>;
}

export default AppContainer;
