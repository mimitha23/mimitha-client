import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { resetGallery } from "store/reducers/gallerySlice";
import calcImageDimention from "functions/calcImageDimention";

import SliderModal from "./components/SliderModal";
import GalleryList from "./components/GalleryList";
import * as Styled from "./Gallery.styled";

export default function Gallery() {
  const dispatch = useDispatch();

  useEffect(() => {
    calcImageDimention();

    return () => {
      dispatch(resetGallery());
    };
  }, [dispatch]);

  return (
    <Styled.Gallery>
      <GalleryList />
      <SliderModal />
    </Styled.Gallery>
  );
}
