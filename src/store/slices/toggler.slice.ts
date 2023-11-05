import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAuthDetectors {
  isLogOutWindowOpen: boolean;
}

const initialState: IAuthDetectors = {
  isLogOutWindowOpen: false,
};

const togglerSlice = createSlice({
  name: 'togglers',
  initialState,
  reducers: {
    openLogOutWindow(state, action: PayloadAction<boolean>) {
      state.isLogOutWindowOpen = action.payload;
    },
  },
});

export const toggleActions = togglerSlice.actions;
export const toggleReducers = togglerSlice.reducer;
