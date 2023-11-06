import { ArrowLeftIcon, ArrowRightIcon } from "components/Layouts/Icons/index";

interface SliderButtonsT {
  activeImageIndex: number;
  handleSlider: (index: number) => void;
}

const SliderButtons: React.FC<SliderButtonsT> = ({
  handleSlider,
  activeImageIndex,
}) => {
  const onPreviousSlide = () => handleSlider(activeImageIndex - 1);

  const onNextSlide = () => handleSlider(activeImageIndex + 1);

  return (
    <div className="gallery-modal__slider-btn--box">
      <button
        className="gallery-modal__slider-btn--box__btn"
        onClick={onPreviousSlide}
      >
        <ArrowLeftIcon />
      </button>
      <button
        className="gallery-modal__slider-btn--box__btn"
        onClick={onNextSlide}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default SliderButtons;
