import { useSelector, useDispatch } from "react-redux";

import { galleryActions } from "store/reducers/gallery.reducer";
import { selectGalleryState } from "store/selectors/gallery.selector";

import { ModalWindow } from "components/Layouts/index";

import FigActions from "./FigActions";
import SliderButtons from "./SliderButtons";
import * as Styled from "./styles/SliderModal.styled";

export default function SliderModal() {
  const dispatch = useDispatch();

  const { galleryModalIsActive, activeImageIndex, activeImage } =
    useSelector(selectGalleryState);

  const handleSlider = (index) =>
    dispatch(galleryActions.setGallerySliderActiveImageIndex(index));

  return (
    <ModalWindow
      activeModal={galleryModalIsActive}
      closeModal={() => dispatch(galleryActions.closeGallerySlider())}
    >
      <Styled.SliderModal>
        <div className="gallery-modal__fig-box">
          <FigActions showOpenImageBtn={false} />
          {activeImage && (
            <figure className="gallery-modal__fig">
              <img
                className="gallery-modal__img"
                src={activeImage.img}
                alt={activeImage.img}
              />
            </figure>
          )}
        </div>

        <SliderButtons
          activeImageIndex={activeImageIndex}
          handleSlider={handleSlider}
        />
      </Styled.SliderModal>
    </ModalWindow>
  );
}
