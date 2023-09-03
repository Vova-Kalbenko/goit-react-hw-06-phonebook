
import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (store, action) => {
      // console.log(action.payload)
      // store.push(action.payload);
      return [...store, action.payload]
     
    },
    deleteContact: (store, action) =>  store.filter((item) => item.id !== action.payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;