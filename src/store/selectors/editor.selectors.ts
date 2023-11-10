import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

// MEMORISED SELECTORS
const selectedEditorStatus = ({ editor }: RootStateT) => ({
  loading: editor.status.loading,
  error: editor.status.error,
  message: editor.status.message,
});

const selectedActiveConfig = ({ editor }: RootStateT) => ({
  _id: editor.activeConfig._id,
  isPublic: editor.activeConfig.isPublic,
  variants: editor.activeConfig.variants,
  assets: editor.activeConfig.assets,
  mannequin: editor.activeConfig.mannequin,
  modelVideo: editor.activeConfig.modelVideo,
  placingVideo: editor.activeConfig.placingVideo,
  pickUpVideo: editor.activeConfig.pickUpVideo,
});

// SELECTORS
const selectEditorVariants = ({ editor }: RootStateT) => editor.variants;

const selectAvailableProducts = ({ editor }: RootStateT) =>
  editor.availableProducts;

const selectActiveConfig = createSelector(
  selectedActiveConfig,
  (config) => config
);

const selectEditorStatus = createSelector(
  selectedEditorStatus,
  (status) => status
);

const selectEditorMode = ({ editor }: RootStateT) =>
  editor.editor_change_by_mode;

export {
  selectEditorVariants,
  selectAvailableProducts,
  selectActiveConfig,
  selectEditorStatus,
  selectEditorMode,
};
