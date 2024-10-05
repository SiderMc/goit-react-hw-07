import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectContacts } from './contactsSlice';

const initialState = {
  name: '',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectFilters = state => state.filters.name;
export const { filterContacts } = slice.actions;
export const filterReducer = slice.reducer;

export const selectFilteredContacts  = createSelector(
  [selectContacts, selectFilters],
  (contacts, value) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
  }
);
