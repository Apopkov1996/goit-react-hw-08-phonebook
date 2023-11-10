export const selectContacts = state => state.contactsList.items;

export const selectFilter = state => state.filter.filter;

export const selectIsLoading = state => state.contactsList.isLoading;

export const selectError = state => state.contactsList.error;
