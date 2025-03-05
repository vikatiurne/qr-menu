import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type isSignType = 'in' | 'up' | 'reset';

export interface SignState {
  isSign: isSignType;
  chekedSignRemember: boolean;
  isAuth: boolean;
}

const initialState: SignState = {
  isSign: 'in',
  chekedSignRemember: false,
  isAuth: true,//true для разработки, нужно будет поменять на false 
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

export const { setSign, changeCheckedSign } = authSlice.actions;
export default authSlice.reducer;
