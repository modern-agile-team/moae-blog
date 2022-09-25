import theme from "@styles/theme";
import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import Description from "./Description";
import Footer from "./Footer";

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

const LazyLoadingImage = lazy(() => import("./Image"));

const Card = ({ title, description, date, userInfo, titleImage, id }: Props) => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Wrapper>
        <a href={`/user/${userInfo.name}/${id}`}>
          <LazyLoadingImage titleImage={titleImage} />
          <Description title={title} description={description} date={date} />
          <Footer userInfo={userInfo} />
        </a>
      </Wrapper>
    </Suspense>
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
