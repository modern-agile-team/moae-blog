import theme from "@styles/theme";
import React, { useCallback } from "react";
import styled from "styled-components";
import Description from "./Description";
import Footer from "./Footer";
import Image from "./Image";

interface Props {
  title: string;
  description: string;
  date: string;
  userInfo: {
    profileImage: string;
    name: string;
  };
  titleImage: string;
  id: string;
}

const Card = ({ title, description, date, userInfo, titleImage, id }: Props) => {
  return (
    <Wrapper>
      <a href={`/${userInfo.name}/${id}`}>
        <Image titleImage={titleImage} />
        <Description title={title} description={description} date={date} />
        <Footer userInfo={userInfo} />
      </a>
    </Wrapper>
  );
};

export default React.memo(Card);

const Wrapper = styled.div`
  width: 100%;
  margin: 1rem;
  border-radius: 6px;
  box-shadow: 0 3px 3px #c4c4c4;
  transition: 0.3s;
  background-color: ${theme.COLORS.BG1};
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
  }
`;
