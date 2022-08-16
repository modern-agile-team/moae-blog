import { useRecoilValue } from "recoil";
import styled from "styled-components";
import deviceAtom from "@recoil/deviceAtom";
import theme from "@styles/theme";
import { Card, Carousel } from "@component/Common";
import { useRef } from "react";

const HotPosts = () => {
  const device = useRecoilValue(deviceAtom);

  const userInfo = {
    profileImage:
      "https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90",
    name: "아이유",
  };

  const cardProps = {
    id: "1231245",
    title: "타이틀",
    description: "내용",
    date: "2022-05-22",
    userInfo,
    titleImage:
      "https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90",
  };

  const slideToShow = useRef((deviceType: "desktop" | "tablet" | "mobile") => {
    switch (deviceType) {
      case "desktop":
        return 4;
      case "tablet":
        return 2;
      case "mobile":
        return 1;
    }
  });

  return (
    <Wrapper>
      <Carousel
        slideToShow={slideToShow.current(device)}
        autoplaySpeed={8000}
        arrowLocation="bottom-side"
        // isAutoplay
        isArrowShow={false}
      >
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
      </Carousel>
    </Wrapper>
  );
};

export default HotPosts;

const Wrapper = styled.div`
  max-height: 700px;
  margin: 2rem 0 4rem 0;
  h3 {
    padding: 0 6rem;
    margin: 0;
    color: #ececec;
  }

  @media (max-width: 568px) {
    h3 {
      padding: 0 1rem;
      font-size: ${theme.FONT.HEAD5.fontSize};
    }
  }
`;
