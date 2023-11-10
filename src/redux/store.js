import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './cotactSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contactsList: contactsReducer,
    filter: filterReducer,
  },
});
