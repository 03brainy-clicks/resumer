import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const DocumentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    addDocument(state, action) {
      state.document = action.payload;
    },
    resetDocument(state) {
      state.document = {};
    },
  },
});

export const { addDocument ,resetDocument} = DocumentSlice.actions;
export default DocumentSlice.reducer;
