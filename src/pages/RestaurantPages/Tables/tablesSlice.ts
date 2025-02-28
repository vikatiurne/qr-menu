import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Table {
  id: number;
  order: React.ReactNode; 
  status: 'free' | 'serviced'; 
  call: boolean; 
}

interface TablesState {
  tables: Table[]; 
}

const initialState: TablesState = {
  tables: [], 
};

const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    initializeTables(state, action: PayloadAction<number>) {
      state.tables = Array.from({ length: action.payload }, (_, index) => ({
        id: index + 1,
        order: null,
        status: 'free',
        call: false,
      }));
    },
    updateTableStatus(state, action: PayloadAction<{ id: number; status: 'free' | 'serviced' }>) {
      const table = state.tables.find(t => t.id === action.payload.id);
      if (table) {
        table.status = action.payload.status; 
      }
    },
  },
});

export const { initializeTables, updateTableStatus } = tablesSlice.actions;
export default tablesSlice.reducer;