import React from 'react';
import styled from "styled-components";

const ButtonContainer = styled.button`
  background: transparent;
  color:${props => props.cart? "var(--mainYellow)":"var(--lightBlue)"};
  text-transform: capitalize;
  font-size: 1.4rem;
  border: 0.1rem solid var(--lightBlue);
  border-color: ${props => props.cart? "var(--mainYellow)":"var(--lightBlue)"};
  border-radius: 0.4rem;
  transition: all 5s ease;
  &:hover {
    background: ${props => props.cart?"var(--mainYellow)":"var(--lightBlue)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`

export default ButtonContainer;