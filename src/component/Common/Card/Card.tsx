import React from "react";

import Description from "./Description";
import Footer from "./Footer";
import CardImage from "./Image";
import * as S from "./styled";

import Logo from "@assets/images/logo.png";

interface Props {
  title: string;
  description: string;
  date: string;
  // userInfo: {
  //   profileImage: string;
  //   name: string;
  // };
  titleImage?: string;
  doImageLoad?: boolean;
  onClick?: () => void;
}

const Card = ({ title, description, date, titleImage, onClick, doImageLoad = true }: Props) => {
  return (
    <S.Wrapper onClick={onClick}>
      <CardImage src={titleImage || Logo.src} doLoad={doImageLoad} />
      <Description title={title} description={description} date={date} />
      <Footer />
    </S.Wrapper>
  );
};

export default React.memo(Card);
