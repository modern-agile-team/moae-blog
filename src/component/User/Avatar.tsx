import React from "react";
import styled from "styled-components";

interface Props {
  img?: string | null;
  onClick: () => void;
}

const Avatar = ({ img, onClick }: Props) => {
  return <Wrapper img={img || ""} onClick={onClick}></Wrapper>;
};

export default Avatar;

const Wrapper = styled.div<{
  img: string;
}>`
  position: relative;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  cursor: pointer;
`;
