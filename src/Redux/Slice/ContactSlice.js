import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact(state, action) {
      state.contact = action.payload;
    },
    resetContact(state) {
      state.contact = {};
    },
  },
});

export const { addContact, resetContact } = ContactSlice.actions;
export default ContactSlice.reducer;
