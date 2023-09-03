// contacts-selectors.js
import { createSelector } from '@reduxjs/toolkit';

export const getContacts = (store) => store.contacts;

export const getFilteredContacts = createSelector(
  // WE TAKE EXACT ARRAY OF CONTACTS FROM STORE AND FUNCTION(METHOD) TO FILTER CONTACTS FROM STORE
  [getContacts, store  => store.filter], 
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter)); 
  }
);
