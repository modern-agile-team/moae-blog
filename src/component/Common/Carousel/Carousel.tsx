import React, { cloneElement, ReactElement, useEffect, useMemo } from "react";
import { uuid } from "uuidv4";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import * as S from "./style";
import { useCarousel } from "./hooks";

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
  getCurrentItem?: (param: any) => void;
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
  getCurrentItem,
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

  useEffect(() => {
    getCurrentItem && getCurrentItem(itemList[showIndex]);
    return () => {
      getCurrentItem && getCurrentItem(itemList[showIndex]);
    };
  }, [showIndex]);

  return (
    <S.Wrapper arrowLocation={arrowLocation} width={width}>
      {isArrowShow && (
        <div className="arrow-icon-wrapper" id="prev-button" onClick={showPrev}>
          {sizedPrevArrowIcon}
        </div>
      )}
      <S.Container len={itemLength} transition={transitionTime} showIndex={showIndex} slideToShow={slideToShow}>
        <div className="carousel-wrapper">
          <div className="carousel-container">
            {itemList.map((child) => {
              return (
                <S.Item len={itemLength} slideToShow={slideToShow} key={uuid()}>
                  {React.cloneElement(child, { doImageLoad: false })}
                </S.Item>
              );
            })}
          </div>
        </div>
      </S.Container>
      {isArrowShow && (
        <div className="arrow-icon-wrapper" id="next-button" onClick={showNext}>
          {sizedNextArrowIcon}
        </div>
      )}
    </S.Wrapper>
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
