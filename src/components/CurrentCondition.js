import React from 'react';

import styled from 'styled-components';

const StyledH2 = styled.h2`
  text-align: center;
  margin-top: 5px;
`;

function CurrentCondition({ condition, temp }) {
  return (
    <StyledH2>
      {condition && temp ? (
        <p>
          {condition} {temp}
        </p>
      ) : null}
    </StyledH2>
  );
}

export default CurrentCondition;
