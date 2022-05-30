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
  width?: string;
}

const Card = ({ title, description, date, userInfo, titleImage, id, width }: Props) => {
  const moveToPost = useCallback(() => {
    if (typeof window === undefined) return;
    window.location.href = `/${userInfo.name}/${id}`;
  }, []);

  return (
    <Wrapper onClick={moveToPost} width={width}>
      <Image titleImage={titleImage} />
      <Description title={title} description={description} date={date} />
      <Footer userInfo={userInfo} />
    </Wrapper>
  );
};

export default React.memo(Card);

const Wrapper = styled.div<{
  width?: string;
}>`
  width: ${(props) => props.width || "calc(20% - 2rem)"};
  margin: 1rem;
  border-radius: 6px;
  box-shadow: 0 3px 3px #e6e6e6;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
  }
  @media (max-width: 568px) {
    width: 100%;
  }
`;
