import React from 'react';

import styled from 'styled-components';

const StyledInput = styled.input`
  text-align: center;
`;

function SearchBox() {
  return (
    <div>
      <form>
        <StyledInput
          type="text"
          id="location"
          name="location"
          placeholder="Enter city"
          autoComplete="off"
        ></StyledInput>
      </form>
    </div>
  );
}

export default SearchBox;
