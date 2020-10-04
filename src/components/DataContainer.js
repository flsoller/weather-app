import React from 'react';
import styled from 'styled-components';

const StyledDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 75%;
  justify-content: space-around;
  align-items: center;
  border-radius: 50px;
  background: #e2e9f8;
  box-shadow: 16px 16px 32px #91959f, -16px -16px 32px #ffffff;

  @media (max-width: 500px) {
    border-radius: 0px;
    height: 100%;
    width: 100%;
  }
`;

function DataContainer({ children }) {
  return <StyledDataContainer>{children}</StyledDataContainer>;
}

export default DataContainer;
