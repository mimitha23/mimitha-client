import { createSlice } from "@reduxjs/toolkit";
import { gallery } from "lib/index";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    gallery: gallery || [],
    activeImageIndex: NaN,
    activeImage: null,
    galleryModalIsActive: false,
  },
  reducers: {
    openGalleryImage(state, { payload: imgSrc }) {
      const activeImageIndex = state.gallery.findIndex(
        (item) => item.img === imgSrc
      );

      if (activeImageIndex < 0) return;

      state.activeImageIndex = activeImageIndex;
      state.activeImage = state.gallery[activeImageIndex];
      state.galleryModalIsActive = true;
    },

    setGallerySliderActiveImageIndex(state, { payload: index }) {
      if (index < 0) state.activeImageIndex = state.gallery.length - 1;
      else if (index > gallery.length - 1) state.activeImageIndex = 0;
      else state.activeImageIndex = index;

      state.activeImage = state.gallery[state.activeImageIndex];
    },

    closeGallerySlider(state) {
      state.galleryModalIsActive = false;
      state.activeImageIndex = NaN;
      state.activeImage = undefined;
    },

    resetGallery(state) {
      state.galleryModalIsActive = false;
      state.activeImageIndex = NaN;
      state.activeImage = undefined;
    },
  },
});

export default gallerySlice.reducer;
export const galleryActions = gallerySlice.actions;
