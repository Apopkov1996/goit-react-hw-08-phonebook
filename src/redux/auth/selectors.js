export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectName = state => state.auth.user.name;

export const selectEmail = state => state.auth.user.email;

export const selectError = state => state.auth.error;

export const selectRefresh = state => state.auth.refresh;
