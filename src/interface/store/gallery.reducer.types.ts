export interface GalleryStateT {
  gallery: Array<GalleryItemT>;
  activeImageIndex: number;
  activeImage: GalleryItemT | null;
  galleryModalIsActive: boolean;
}

export interface GalleryItemT {
  img: string;
  productId: string;
}
