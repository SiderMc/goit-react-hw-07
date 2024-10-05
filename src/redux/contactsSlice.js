import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOps';

const initialState = {
  items: [],
  loading: false,
  error: false,
  modal: false,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modal = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const selectContacts = state => state.contacts.items;
export const selectModal = state => state.contacts.modal;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const { openModal } = slice.actions;
export const contactsReducer = slice.reducer;
