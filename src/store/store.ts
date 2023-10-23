import { configureStore } from '@reduxjs/toolkit';
// import { jphapi } from './fakeapi-jph/fakeapi-jph';
import { togglerReducers } from './toggler.slice';
import { AuthApi } from './api/auth_api';

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    // [jphapi.reducerPath]: jphapi.reducer,
    toggler: togglerReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
