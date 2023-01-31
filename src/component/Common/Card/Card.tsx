import { useRouter } from "next/router";
import React from "react";

import Description from "./Description";
import Footer from "./Footer";
import CardImage from "./Image";
import * as S from "./styled";

interface Props {
  title: string;
  description: string;
  date: string;
  // userInfo: {
  //   profileImage: string;
  //   name: string;
  // };
  titleImage: string;
  id: string;
  doImageLoad?: boolean;
}

const Card = ({ title, description, date, titleImage, id, doImageLoad = true }: Props) => {
  const router = useRouter();

  return (
    <S.Wrapper>
      <CardImage src={titleImage} doLoad={doImageLoad} />
      <Description title={title} description={description} date={date} />
      <Footer />
    </S.Wrapper>
  );
};

export default React.memo(Card);
