import { configureStore } from '@reduxjs/toolkit';
import { jphapi } from './fakeapi-jph/fakeapi-jph';
import { togglerReducers } from './toggler.slice';

export const store = configureStore({
  reducer: {
    [jphapi.reducerPath]: jphapi.reducer,
    toggler: togglerReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jphapi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
