import { configureStore } from '@reduxjs/toolkit';
import { signInReducers } from './detectors.slice';
import { AuthApi } from './api/auth_api';

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    signIn: signInReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
