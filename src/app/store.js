import { configureStore } from '@reduxjs/toolkit';
import { languagesApi } from "../redux/api/languages";

export const store = configureStore({
  reducer: {
    [languagesApi.reducerPath]: languagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(languagesApi.middleware),
});

export default store;