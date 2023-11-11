type GalleryStateT = {
  gallery: Array<GalleryItemT>;
  activeImageIndex: number;
  activeImage: GalleryItemT | null;
  galleryModalIsActive: boolean;
};

type GalleryItemT = {
  img: string;
  productId: string;
};

export type { GalleryStateT, GalleryItemT };
