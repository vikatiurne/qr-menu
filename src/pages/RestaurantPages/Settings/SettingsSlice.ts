import { createSlice } from '@reduxjs/toolkit';

export interface SettingsState {
  qtyTables: number;
}

const initialState: SettingsState = {
  qtyTables: 1,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
});


export default settingsSlice.reducer;
