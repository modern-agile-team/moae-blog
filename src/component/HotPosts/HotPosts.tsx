import { useRecoilValue } from "recoil";
import styled from "styled-components";
import deviceAtom from "@recoil/deviceAtom";
import theme from "@styles/theme";
import { Card, Carousel } from "@component/Common";
import { useMemo } from "react";
import { cardProps } from "src/constant/test";

const randomSize = () => {
  return Math.floor(Math.random() * 1000);
};

const HotPosts = () => {
  const device = useRecoilValue(deviceAtom);

  const slideToShow = useMemo(() => {
    switch (device) {
      case "desktop":
        return 4;
      case "tablet":
        return 2;
      case "mobile":
        return 1;
    }
  }, [device]);

  return (
    <Wrapper>
      <Carousel slideToShow={slideToShow} autoplaySpeed={7000} isArrowShow={true} isAutoplay={true}>
        <Card {...cardProps} description="1" titleImage={`https://picsum.photos/${randomSize()}/${randomSize()}`} />
        <Card {...cardProps} description="2" titleImage={`https://picsum.photos/${randomSize()}/${randomSize()}`} />
        <Card {...cardProps} description="3" titleImage={`https://picsum.photos/${randomSize()}/${randomSize()}`} />
        <Card {...cardProps} description="4" titleImage={`https://picsum.photos/${randomSize()}/${randomSize()}`} />
        <Card {...cardProps} description="5" titleImage={`https://picsum.photos/${randomSize()}/${randomSize()}`} />
        <Card {...cardProps} description="6" titleImage={`https://picsum.photos/${randomSize()}/${randomSize()}`} />
        <Card {...cardProps} description="7" titleImage={`https://picsum.photos/${randomSize()}/${randomSize()}`} />
        <Card {...cardProps} description="8" titleImage={`https://picsum.photos/${randomSize()}/${randomSize()}`} />
        <Card {...cardProps} description="9" titleImage={`https://picsum.photos/${randomSize()}/${randomSize()}`} />
        <Card {...cardProps} description="10" titleImage={`https://picsum.photos/${randomSize()}/${randomSize()}`} />
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
