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
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
    slidesToSlide: 4,
  },
  largeDesktop: {
    breakpoint: { max: 3000, min: 1580 },
    items: 5,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 1580, min: 1280 },
    items: 4,
    slidesToSlide: 2,
  },
  tabletLarge: {
    breakpoint: { max: 1280, min: 960 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 960, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function MultipleSlider({ children, media = {} }) {
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
}

export default MultipleSlider;
