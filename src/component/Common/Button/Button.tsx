import React from "react";
import styled from "styled-components";

interface IButtonType {
  placeholder?: string;
  type?: "button" | "reset" | "submit";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: IButtonType) => {
  return <StyledButton {...props}>{props.placeholder}</StyledButton>;
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
