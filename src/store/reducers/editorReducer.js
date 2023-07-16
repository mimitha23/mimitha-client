import { createSlice } from "@reduxjs/toolkit";

const editorSlice = createSlice({
  name: "editor",
  initialState: {},
  reducers: {},
});

export default editorSlice.reducer;
export const editorActions = editorSlice.actions;
