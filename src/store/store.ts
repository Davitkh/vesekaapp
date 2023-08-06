import { configureStore } from "@reduxjs/toolkit";
import { jphapi } from "./fakeapi-jph/fakeapi-jph";

export const store = configureStore({
  reducer: {
    [jphapi.reducerPath]: jphapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jphapi.middleware),
});
