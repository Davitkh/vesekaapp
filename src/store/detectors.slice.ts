import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../types';

interface IAuthDetectors {
  user: IUser;
}

const initialState: IAuthDetectors = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
  },
};

export const detecorsSlice = createSlice({
  name: 'togglers',
  initialState,
  reducers: {
    handleSignIn(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
});

export const signInActions = detecorsSlice.actions;
export const signInReducers = detecorsSlice.reducer;
