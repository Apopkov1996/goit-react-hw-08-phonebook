import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './cotactSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    contactsList: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
