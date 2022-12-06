import React, { cloneElement, ReactElement, useMemo } from "react";
import { useCarousel } from "./hooks";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ChildrenWrapper, Container, Wrapper } from "./style";
import { uuid } from "uuidv4";
interface Props {
  children: React.ReactNode;
  width?: string;
  transition?: number;
  autoplaySpeed?: number;
  slideToShow?: number;
  isArrowShow?: boolean;
  isAutoplay?: boolean;
  arrowLocation?: "bottom" | "mid-side" | "top" | "bottom-side" | "top-side";
  prevArrowIcon?: ReactElement;
  nextArrowIcon?: ReactElement;
}

const Carousel = ({
  children,
  width,
  transition = 1000,
  autoplaySpeed = 3000,
  slideToShow = 1,
  isArrowShow = true,
  isAutoplay = true,
  arrowLocation = "mid-side",
  prevArrowIcon = <FiChevronLeft />,
  nextArrowIcon = <FiChevronRight />,
}: Props) => {
  const { itemList, showIndex, transitionTime, listeners, itemLength } = useCarousel({
    children,
    slideToShow,
    transition,
    autoplaySpeed,
    isAutoplay,
  });
  const { showPrev, showNext } = listeners;
  const sizedPrevArrowIcon = useMemo(() => cloneElement(prevArrowIcon), [prevArrowIcon]);
  const sizedNextArrowIcon = useMemo(() => cloneElement(nextArrowIcon), [nextArrowIcon]);
  return (
    <Wrapper arrowLocation={arrowLocation} width={width}>
      {isArrowShow && (
        <div className="arrow-icon-wrapper" id="prev-button" onClick={showPrev}>
          {sizedPrevArrowIcon}
        </div>
      )}
      <Container len={itemLength} transition={transitionTime} showIndex={showIndex} slideToShow={slideToShow}>
        <div className="carousel-wrapper">
          <div className="carousel-container">
            {itemList.map((child) => {
              return (
                <ChildrenWrapper len={itemLength} slideToShow={slideToShow} key={uuid()}>
                  {React.cloneElement(child, { doImageLoad: false })}
                </ChildrenWrapper>
              );
            })}
          </div>
        </div>
      </Container>
      {isArrowShow && (
        <div className="arrow-icon-wrapper" id="next-button" onClick={showNext}>
          {sizedNextArrowIcon}
        </div>
      )}
    </Wrapper>
  );
};

export default Carousel;

Carousel.defaultProps = {
  transition: 1000,
  autoplaySpeed: 3000,
  slideToShow: 1,
  isArrowShow: true,
  isAutoplay: false,
  isAutoplayControl: true,
  arrowLocation: "mid-side",
  prevArrowIcon: <FiChevronLeft />,
  nextArrowIcon: <FiChevronRight />,
};
