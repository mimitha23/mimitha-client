import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectedGalleryState = ({ gallery }: RootStateT) => ({
  activeImage: gallery.activeImage,
  activeImageIndex: gallery.activeImageIndex,
  galleryModalIsActive: gallery.galleryModalIsActive,
});

const selectGallery = ({ gallery }: RootStateT) => gallery.gallery;

const selectGalleryState = createSelector(
  selectedGalleryState,
  (state) => state
);

export { selectGallery, selectGalleryState };
