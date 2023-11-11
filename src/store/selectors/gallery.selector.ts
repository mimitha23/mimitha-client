import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

// MEMORISED SELECTORS
const selectedGalleryState = ({ gallery }: RootStateT) => ({
  activeImage: gallery.activeImage,
  activeImageIndex: gallery.activeImageIndex,
  galleryModalIsActive: gallery.galleryModalIsActive,
});

// SELECTORS
const selectGallery = ({ gallery }: RootStateT) => gallery.gallery;

const selectGalleryState = createSelector(
  selectedGalleryState,
  (state) => state
);

export { selectGallery, selectGalleryState };
