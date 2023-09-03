import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ILogin {
  isLogin: boolean;
}

const initialState: ILogin = {
  isLogin: true,
};

export const togglerSlice = createSlice({
  name: 'togglers',
  initialState,
  reducers: {
    toggleAuthForm(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
});

export const togglerActions = togglerSlice.actions;
export const togglerReducers = togglerSlice.reducer;
