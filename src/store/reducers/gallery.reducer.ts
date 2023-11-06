import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gallery } from "lib/index";

import { GalleryStateT } from "interface/store/gallery.reducer.types";

const initialState: GalleryStateT = {
  gallery: gallery || [],
  activeImageIndex: NaN,
  activeImage: null,
  galleryModalIsActive: false,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    openGalleryImage(state, { payload }: PayloadAction<{ imgSrc: string }>) {
      const activeImageIndex = state.gallery.findIndex(
        (item) => item.img === payload.imgSrc
      );

      if (activeImageIndex < 0) return;

      state.activeImageIndex = activeImageIndex;
      state.activeImage = state.gallery[activeImageIndex];
      state.galleryModalIsActive = true;
    },

    setGallerySliderActiveImageIndex(
      state,
      { payload: { index } }: PayloadAction<{ index: number }>
    ) {
      if (index < 0) state.activeImageIndex = state.gallery.length - 1;
      else if (index > gallery.length - 1) state.activeImageIndex = 0;
      else state.activeImageIndex = index;

      state.activeImage = state.gallery[state.activeImageIndex];
    },

    closeGallerySlider(state) {
      state.galleryModalIsActive = false;
      state.activeImageIndex = NaN;
      state.activeImage = null;
    },

    resetGallery(state) {
      state.galleryModalIsActive = false;
      state.activeImageIndex = NaN;
      state.activeImage = null;
    },
  },
});

export default gallerySlice.reducer;
export const galleryActions = gallerySlice.actions;
