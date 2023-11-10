import {
  EditorModeT,
  EditorVariantsT,
  ChangeEditorConfigArgsT,
} from "interface/store/editor.reducer.types";
import { MimithaLocaleT } from "interface/common.types";
import { ProductVariantT } from "interface/DB/editor.types";
import { MutableRefObject } from "react";

type EditorProviderT = {
  children: React.ReactNode;
};

type ViewMediaStateT = {
  type: EditorModeT;
  src: string;
  secondarySrc?: string;
};

type DetectUnrecognizedVariantsArgsT = {
  dropdownVariants: Array<ProductVariantT>;
  activeVariantId: string;
};

type EditorContextT = {
  activeDropdown: string;
  setActiveDropdown: React.Dispatch<React.SetStateAction<string>>;
  currentLocale: MimithaLocaleT;
  activeVariants: Array<string>;
  viewMode: EditorModeT;
  onChangeViewMode: () => void;
  viewMedia: ViewMediaStateT;
  isCleanUpProcess: boolean;
  pickUpVideoRef: MutableRefObject<null | HTMLVideoElement> | null;
  placingVideoRef: MutableRefObject<null | HTMLVideoElement> | null;
  onVideoEnd: () => void;
  editorVariants: EditorVariantsT;
  onChangeConfig: (args: ChangeEditorConfigArgsT) => void;
  detectUnrecognizedVariants: (
    args: DetectUnrecognizedVariantsArgsT
  ) => Array<string>;
};

export type {
  EditorProviderT,
  ViewMediaStateT,
  DetectUnrecognizedVariantsArgsT,
  EditorContextT,
};
