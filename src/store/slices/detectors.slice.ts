import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types';

interface IAuthDetectors {
  user: IUser | null;
}
const isUser = sessionStorage.getItem('user');
const initialState: IAuthDetectors = {
  user: isUser ? JSON.parse(isUser) : null,
};

const detectorsSlice = createSlice({
  name: 'detectors',
  initialState,
  reducers: {
    handleSignIn(state, action: PayloadAction<IUser>) {
      const user = action.payload;
      sessionStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },
    handleLogOut(state) {
      sessionStorage.clear();
      state.user = null;
    },
  },
});

export const signInActions = detectorsSlice.actions;
export const signInReducers = detectorsSlice.reducer;
