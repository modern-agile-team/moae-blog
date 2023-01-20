import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface IButtonType extends HTMLAttributes<HTMLButtonElement> {}

const Button = (props: IButtonType) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  border-radius: 3px;
  border: none;
  background-color: rgb(60, 47, 37);
  color: #fff;
  padding: 10px 5px;
  font-size: 15px;
  cursor: pointer;
`;

export default Button;
