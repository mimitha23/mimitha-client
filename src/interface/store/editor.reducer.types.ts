import { LoadingStatusT } from "./store.common";
import { ProductVariantT, EditorProductT } from "interface/DB/editor.types";

type EditorStateT = {
  availableProducts: Array<EditorProductT>;

  activeConfigId: string;

  editor_change_by_mode: EditorModeT;

  activeConfig: EditorProductT;

  variants: EditorVariantsT;

  status: LoadingStatusT;
};

type EditorVariantsT = { [key: string]: StateVariantsT };

type StateVariantsT = {
  _id: string;
  type: string;
  label_ka: string;
  label_en: string;
  variants: Array<ProductVariantT>;
};

enum EDITOR_CHANGE_BY_MODE {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

type EditorModeT = keyof typeof EDITOR_CHANGE_BY_MODE;

type ChangeEditorConfigArgsT = {
  currentVariantId: string;
  newVariantId: string;
};

export type {
  EditorStateT,
  StateVariantsT,
  EditorModeT,
  EditorVariantsT,
  ChangeEditorConfigArgsT,
};
export { EDITOR_CHANGE_BY_MODE };
