import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type isSignType = 'in' | 'up' | 'reset';

interface SignState {
  isSign: isSignType;
}

const initialState: SignState = {
  isSign: 'in',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSign: (state, action: PayloadAction<isSignType>) => {
      state.isSign = action.payload;
    },
  },
});

export const { setSign } = authSlice.actions;
export default authSlice.reducer;
