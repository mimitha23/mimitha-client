import { useEffect, useState } from "react";

import FigActions from "./FigActions";
import * as Styled from "./styles/SliderModal.styled";
import { ArrowLeftIcon, ArrowRightIcon } from "components/Layouts/Icons/index";
import { ModalWindow } from "components/Layouts/index";

export default function SliderModal({ gallery, openImage, setOpenImage }) {
  const [activeImageIndex, setActiveImageIndex] = useState(NaN);

  function handleSlider(index) {
    if (index < 0) {
      setActiveImageIndex(gallery.length - 1);
    } else if (index > gallery.length - 1) {
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex(index);
    }
  }

  useEffect(() => {
    if (!openImage) return setActiveImageIndex(NaN);
    const activeIndex = gallery.findIndex((item) => item.img === openImage);
    if (activeIndex >= 0) setActiveImageIndex(activeIndex);
  }, [openImage, gallery]);

  return (
    <ModalWindow
      activeModal={openImage !== "" ? true : false}
      closeModal={() => setOpenImage("")}
    >
      <Styled.SliderModal>
        <figure className="gallery-modal__fig">
          {gallery.map((item, itemIndex) => (
            <img
              className={`gallery-modal__img ${
                itemIndex === activeImageIndex
                  ? "gallery-modal__img-active"
                  : "gallery-modal__img-inactive"
              }`}
              src={item.img}
              alt={item.img}
              key={`gallery-slider--${item.productId}`}
            />
          ))}
          <FigActions showOpenImageBtn={false} />
        </figure>

        <div className="gallery-modal__slider-btn--box">
          <button
            className="gallery-modal__slider-btn--box__btn"
            onClick={() => handleSlider(activeImageIndex + 1)}
          >
            <ArrowLeftIcon />
          </button>
          <button
            className="gallery-modal__slider-btn--box__btn"
            onClick={() => handleSlider(activeImageIndex - 1)}
          >
            <ArrowRightIcon />
          </button>
        </div>
      </Styled.SliderModal>
    </ModalWindow>
  );
}
