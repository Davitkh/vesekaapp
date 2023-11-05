import { configureStore } from '@reduxjs/toolkit';
import { signInReducers } from './slices/detectors.slice';
import { toggleReducers } from './slices/toggler.slice';
import { AuthApi } from './api/auth_api';

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    signIn: signInReducers,
    toggle: toggleReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
