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
  titleImage?: string;
  doImageLoad?: boolean;
  onClick?: () => void;
}

const Card = ({ title, description, date, titleImage, onClick, doImageLoad = true }: Props) => {
  return (
    <S.Wrapper onClick={onClick}>
      <CardImage
        src={
          titleImage ||
          "https://www.notion.so/image/https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff0134cd1-9872-438c-9e0c-8d1e0fc490e5%2F%25EB%25A1%259C%25EA%25B3%25A0-09.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DAKIAT73L2G45EIPT3X45%252F20220117%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20220117T051734Z%26X-Amz-Expires%3D86400%26X-Amz-Signature%3Deaa369b00358db493c420bbc8e8ad31e199d32a2421e708ecf25d2c43e95eb4b%26X-Amz-SignedHeaders%3Dhost%26response-content-disposition%3Dfilename%2520%253D%2522%2525EB%2525A1%25259C%2525EA%2525B3%2525A0-09.png%2522%26x-id%3DGetObject?table=block&id=25f5a56c-cbe9-4545-be0a-4608ca55f026&spaceId=0b241d7f-6520-4240-ac94-27957e3f3aa5&width=250&userId=601054f0-a611-49e0-84b9-04831ec920f4&cache=v2"
        }
        doLoad={doImageLoad}
      />
      <Description title={title} description={description} date={date} />
      <Footer />
    </S.Wrapper>
  );
};

export default React.memo(Card);
