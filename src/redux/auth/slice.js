import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  error: null,
  token: '',
  isLoggedIn: false,
  refresh: true,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        return (state = { ...initialState, refresh: false });
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.name;
        state.isLoggedIn = true;
        state.refresh = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.refresh = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.refresh = false;
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.refresh = false;
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.rejected, loginThunk.rejected),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});

export const authReducer = slice.reducer;
