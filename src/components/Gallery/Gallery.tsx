import { useEffect } from "react";
import { useAppDispatch } from "store/hooks";

import { galleryActions } from "store/reducers/gallery.reducer";
import calcImageDimension from "functions/calcImageDimension";

import SliderModal from "./components/SliderModal";
import GalleryList from "./components/GalleryList";
import * as Styled from "./Gallery.styled";

const Gallery: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    calcImageDimension();

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
};

export default Gallery;
