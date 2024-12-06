import { GridRowModel, GridRowsProp } from "@mui/x-data-grid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface PrescribedMedicineTableState {
  rows: GridRowsProp;
}

// Define the initial state using that type
const initialState: PrescribedMedicineTableState = {
  rows: [],
};

export const prescribedMedicineTableState = createSlice({
  name: "prescribedMedicineTable",
  initialState,
  reducers: {
    addRow: (state, action: PayloadAction<GridRowModel>) => {
      state.rows.push({
        ...action.payload,
        id: state?.rows?.length + 1,
      });
    },
    updateRowById: (state, action: PayloadAction<GridRowModel>) => {
      state.rows = state.rows.map((row) =>
        row.id === action.payload.id ? { ...action.payload } : row,
      );
    },
    deleteRowById: (state, action: PayloadAction<string[]>) => {
      // TODO : delete multiple rows
    },
  },
});

export const { addRow, updateRowById, deleteRowById } =
  prescribedMedicineTableState.actions;

export default prescribedMedicineTableState.reducer;
