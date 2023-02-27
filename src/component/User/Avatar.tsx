import React from "react";
import styled from "styled-components";

interface Props {
  img?: string | null;
  onClick: () => void;
}

const Avatar = ({ img, onClick }: Props) => {
  return <Wrapper src={img || ""} onClick={onClick} referrerPolicy="no-referrer"></Wrapper>;
};

export default Avatar;

const Wrapper = styled.img`
  position: relative;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;
