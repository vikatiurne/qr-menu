

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type isSignType = 'in' | 'up' | 'reset';

export interface SignState {
  isSign: isSignType;
  chekedSignRemember: boolean
}

const initialState: SignState = {
  isSign: 'in',
  chekedSignRemember: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSign: (state, action: PayloadAction<isSignType>) => {
      state.isSign = action.payload;
    },
    changeCheckedSign: (state, action: PayloadAction<boolean>) => {
      state.chekedSignRemember = action.payload;
    },
  },
});

export const { setSign , changeCheckedSign} = authSlice.actions;
export default authSlice.reducer;
