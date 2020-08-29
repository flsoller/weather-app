import React from 'react';

import styled from 'styled-components';
import { SearchIcon } from '../styles/Icons';

const StyledInput = styled.input`
  text-align: center;
  outline: none;
  width: 250px;
  height: 35px;
  border-radius: 50px;
  opacity: 65%;
  font-size: 1.2rem;
  padding: 0px 30px;
`;

const StyledIconContainer = styled.div`
  position: absolute;
  margin: 5px 0px 0px 5px;
  z-index: 1;
`;

function SearchBox() {
  return (
    <div>
      <form>
        <StyledIconContainer>
          <SearchIcon />
        </StyledIconContainer>
        <StyledInput
          type="text"
          id="location"
          name="location"
          placeholder="Enter city ..."
          autoComplete="off"
        ></StyledInput>
      </form>
    </div>
  );
}

export default SearchBox;
