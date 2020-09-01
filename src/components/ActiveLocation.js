import React from 'react';

import styled from 'styled-components';

const StyledH1 = styled.h1`
  text-align: center;
`;

function ActiveLocation({ location }) {
  return <StyledH1>{location}</StyledH1>;
}

export default ActiveLocation;
