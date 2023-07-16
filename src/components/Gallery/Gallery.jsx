import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { galleryActions } from "store/reducers/galleryReducer";
import calcImageDimention from "functions/calcImageDimention";

import SliderModal from "./components/SliderModal";
import GalleryList from "./components/GalleryList";
import * as Styled from "./Gallery.styled";

export default function Gallery() {
  const dispatch = useDispatch();

  useEffect(() => {
    calcImageDimention();

    return () => {
      dispatch(galleryActions.resetGallery());
    };
  }, [dispatch]);

  return (
    <Styled.Gallery>
      <GalleryList />
      <SliderModal />
    </Styled.Gallery>
  );
}
