import { createSelector } from "@reduxjs/toolkit";

const selectedEditorStatus = ({ editor }) => ({
  loading: editor.status.loading,
  error: editor.status.error,
  message: editor.status.message,
});

export const selectEditorVariants = ({ editor }) => editor.variants;

export const selectActiveConfig = ({ editor }) => editor.activeConfig;

export const selectEditorStatus = createSelector(
  selectedEditorStatus,
  (status) => status
);
