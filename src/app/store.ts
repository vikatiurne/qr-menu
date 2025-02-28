import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@/pages/Auth/authSlice';
import settingsSlice from '@/pages/RestaurantPages/Settings/SettingsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    settings: settingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
