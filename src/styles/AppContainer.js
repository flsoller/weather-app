import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;

  @media (max-width: 500px) {
    height: 70vh;
  }
`;

export default AppContainer;
