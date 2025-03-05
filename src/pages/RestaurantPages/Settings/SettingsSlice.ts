import { createSlice } from '@reduxjs/toolkit';
import React from 'react';



interface SettingsState {
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
