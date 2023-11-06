import { useAppSelector, useAppDispatch } from "store/hooks";

import { galleryActions } from "store/reducers/gallery.reducer";
import { selectGalleryState } from "store/selectors/gallery.selector";

import { ModalWindow } from "components/Layouts/index";

import FigActions from "./FigActions";
import SliderButtons from "./SliderButtons";
import * as Styled from "./styles/SliderModal.styled";

const SliderModal: React.FC = () => {
  const dispatch = useAppDispatch();

  const { galleryModalIsActive, activeImageIndex, activeImage } =
    useAppSelector(selectGalleryState);

  const handleSlider = (index: number) =>
    dispatch(galleryActions.setGallerySliderActiveImageIndex({ index }));

  const onCloseModal = () => dispatch(galleryActions.closeGallerySlider());

  return (
    <ModalWindow activeModal={galleryModalIsActive} closeModal={onCloseModal}>
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
          handleSlider={handleSlider}
          activeImageIndex={activeImageIndex}
        />
      </Styled.SliderModal>
    </ModalWindow>
  );
};

export default SliderModal;
