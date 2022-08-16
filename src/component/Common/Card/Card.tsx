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
  const moveToPost = useCallback(() => {
    if (typeof window === undefined) return;
    window.location.href = `/${userInfo.name}/${id}`;
  }, []);

  return (
    <Wrapper onClick={moveToPost}>
      <Image titleImage={titleImage} />
      <Description title={title} description={description} date={date} />
      <Footer userInfo={userInfo} />
    </Wrapper>
  );
};

export default React.memo(Card);

const Wrapper = styled.div`
  width: 100%;
  margin: 1rem;
  border-radius: 6px;
  box-shadow: 0 3px 3px #e6e6e6;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
  }
`;
