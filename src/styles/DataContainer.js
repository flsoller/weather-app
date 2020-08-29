import styled from 'styled-components';

import bgImage from '../assets/app-bg-clouds.jpg';

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${bgImage});
  background-size: cover;
  width: 70%;
  height: 75%;
  justify-content: space-around;
  align-items: center;
  border-radius: 50px;

  @media (max-width: 500px) {
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 0px;
    height: 100%;
    width: 100%;
  }

  @media (max-height: 475px) {
    background-position: center;
  }
`;

export default DataContainer;
