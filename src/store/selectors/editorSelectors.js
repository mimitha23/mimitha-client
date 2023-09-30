import { createSelector } from "@reduxjs/toolkit";

const selectedEditorStatus = ({ editor }) => ({
  loading: editor.status.loading,
  error: editor.status.error,
  message: editor.status.message,
});

const selectedActiveConfig = ({ editor }) => ({
  _id: editor.activeConfig._id,
  isPublic: editor.activeConfig.isPublic,
  variants: editor.activeConfig.variants,
  assets: editor.activeConfig.assets,
  mannequin: editor.activeConfig.mannequin,
  modelVideo: editor.activeConfig.modelVideo,
  placingVideo: editor.activeConfig.placingVideo,
  pickUpVideo: editor.activeConfig.pickUpVideo,
});

export const selectEditorVariants = ({ editor }) => editor.variants;

export const selectAvailableProducts = ({ editor }) => editor.availableProducts;

export const selectActiveConfig = createSelector(
  selectedActiveConfig,
  (config) => config
);

export const selectEditorStatus = createSelector(
  selectedEditorStatus,
  (status) => status
);
