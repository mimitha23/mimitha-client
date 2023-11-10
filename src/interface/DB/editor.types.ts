type EditorProductT = {
  _id: string;
  isPublic: boolean;
  variants: Array<string>;
  assets: Array<string>;
  mannequin: string;
  placingVideo: string;
  pickUpVideo: string;
  modelVideo: string;
};

type EditProductVariantT = {
  _id: string;
  type: string;
  label_ka: string;
  label_en: string;
  variants: Array<ProductVariantT>;
};

type ProductVariantT = {
  _id: string;
  type: string;
  icon: string;
  label_ka: string;
  label_en: string;
  description_ka: string;
  description_en: string;
};

// API
type GetProductToEditArgsT = {
  registeredProductId: string;
};

type GetProductToEditResponseT = {
  allVariants: Array<EditProductVariantT>;
  docs: Array<EditorProductT>;
};

export type {
  EditorProductT,
  ProductVariantT,
  GetProductToEditArgsT,
  GetProductToEditResponseT,
};
