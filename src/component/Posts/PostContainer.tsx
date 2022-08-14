import React, { useState } from "react";
import styled, { css } from "styled-components";
import theme from "@styles/theme";
import LikeAndShare from "./LikeAndShare";

interface Props {
  children: React.ReactNode;
}

const PostContainer = ({ children }: Props) => {
  const [isLike, setIsLike] = useState(false);

  const toggleIsLike = () => {
    setIsLike(!isLike);
  };

  return (
    <Wrapper>
      <Side direction="left">
        <LikeAndShare isLike={isLike} onClick={toggleIsLike} />
      </Side>
      <Main>{children}</Main>
      <Side direction="right"></Side>
    </Wrapper>
  );
};

export default PostContainer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
  @media (max-width: 568px) {
    width: 100vw;
  }
`;

const Side = styled.section<{
  direction: "left" | "right";
}>`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 200px;
  width: 20%;
  height: fit-content;
  ${({ direction }) => {
    switch (direction) {
      case "left":
        return css`
          align-items: center;
          right: 10rem;
        `;
      case "right":
        return css`
          align-items: "flex-end";
          left: 20rem;
          p {
            color: #6b6b6b;
            cursor: pointer;
          }
        `;
    }
  }}
  p {
    margin: 3px 0;
    font-size: 14px;
    line-height: ${theme.FONT.SMALL.lineHeight};
  }
  @media (max-width: 568px) {
    display: none;
  }
`;

const Main = styled.main`
  width: 60%;
  @media (max-width: 568px) {
    width: 90%;
  }
`;
