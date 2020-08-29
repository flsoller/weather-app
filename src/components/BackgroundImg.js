import React from 'react';
import styled from 'styled-components';
import Picture from '../assets/app-bg-clouds.jpg';

const StyledImg = styled.img`
  width: 800px;
  height: 500px;
  border-radius: 50px;
  display: block;
  margin: 0 auto;
`;

function BackgroundImg() {
  return <StyledImg src={Picture} alt="field on a cloudy day" />;
}

export default BackgroundImg;
