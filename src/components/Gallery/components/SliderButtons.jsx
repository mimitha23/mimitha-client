import { ArrowLeftIcon, ArrowRightIcon } from "components/Layouts/Icons/index";

export default function SliderButtons({ handleSlider, activeImageIndex }) {
  return (
    <div className="gallery-modal__slider-btn--box">
      <button
        className="gallery-modal__slider-btn--box__btn"
        onClick={() => handleSlider(activeImageIndex - 1)}
      >
        <ArrowLeftIcon />
      </button>
      <button
        className="gallery-modal__slider-btn--box__btn"
        onClick={() => handleSlider(activeImageIndex + 1)}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
}
