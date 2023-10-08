export const selectGallery = ({ gallery }) => gallery.gallery;

export const selectGalleryState = ({ gallery }) => ({
  activeImage: gallery.activeImage,
  activeImageIndex: gallery.activeImageIndex,
  galleryModalIsActive: gallery.galleryModalIsActive,
});
