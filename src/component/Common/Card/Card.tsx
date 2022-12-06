import theme from "@styles/theme";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Description from "./Description";
import Footer from "./Footer";
import CardImage from "./Image";

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
  doImageLoad?: boolean;
}

const Card = ({ title, description, date, userInfo, titleImage, id, doImageLoad = true }: Props) => {
  const router = useRouter();
  return (
    <Wrapper
      onClick={() => {
        router.push(`/user/${userInfo.name}/${id}`);
      }}
    >
      <CardImage src={titleImage} doLoad={doImageLoad} />
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
  box-shadow: 0 3px 3px #c4c4c4;
  transition: 0.3s;
  background-color: ${theme.COLORS.BG1};
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
  }
`;
