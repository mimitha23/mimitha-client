import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import SliderButton from "./SliderButton";

import styled from "styled-components";

const MultiSliderContainer = styled.div`
  .multi-slider__container {
    padding: 0.5rem 0;
  }

  .multi-slider__slides-list {
    display: flex;
  }
`;

const responsive = {
  superLargeDesktop: {
    items: 7,
    slidesToSlide: 4,
    breakpoint: { max: 4000, min: 3000 },
  },
  largeDesktop: {
    items: 5,
    slidesToSlide: 3,
    breakpoint: { max: 3000, min: 1580 },
  },
  desktop: {
    items: 4,
    slidesToSlide: 2,
    breakpoint: { max: 1580, min: 1280 },
  },
  tabletLarge: {
    items: 3,
    slidesToSlide: 2,
    breakpoint: { max: 1280, min: 960 },
  },
  tablet: {
    items: 2,
    slidesToSlide: 1,
    breakpoint: { max: 960, min: 464 },
  },
  mobile: {
    items: 1,
    slidesToSlide: 1,
    breakpoint: { max: 464, min: 0 },
  },
};

type ResponsiveKey = keyof typeof responsive;

type MultipleSliderMediaT = {
  [key in ResponsiveKey]: {
    items: number;
    slidesToSlide: number;
    breakpoint: { max: number; min: number };
  };
};

interface MultipleSliderT {
  children: React.ReactNode;
  media?: MultipleSliderMediaT;
}

const MultipleSlider: React.FC<MultipleSliderT> = ({
  children,
  media = {},
}) => {
  return (
    <MultiSliderContainer data-multiple-slider>
      <Carousel
        responsive={{ ...responsive, ...media }}
        swipeable={true}
        infinite={true}
        customLeftArrow={<SliderButton direction="left" />}
        customRightArrow={<SliderButton direction="right" />}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="multi-slider__container"
        sliderClass="multi-slider__slides-list"
      >
        {children}
      </Carousel>
    </MultiSliderContainer>
  );
};

export default MultipleSlider;
