import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditorState } from "draft-js";
import type { RootState } from "../../store";
import { GridColDef, GridRowModel, GridRowsProp } from "@mui/x-data-grid";
import { idID } from "@mui/material/locale";

// Define a type for the slice state
interface TableRowState {
  prescribedMedicineRows: GridRowsProp;
}

// Define the initial state using that type
const initialState: TableRowState = {
  prescribedMedicineRows: [],
};

export const tableRowState = createSlice({
  name: "prescribedMedicineRows",
  initialState,
  reducers: {
    addPrescribedMedicineRow: (state, action: PayloadAction<GridRowModel>) => {
      state.prescribedMedicineRows.push({
        ...action.payload,
        id: state?.prescribedMedicineRows?.length + 1,
      });
    },
    updatePrescribedMedicineRow: (
      state,
      action: PayloadAction<GridRowModel>,
    ) => {
      state.prescribedMedicineRows = state.prescribedMedicineRows.map((row) =>
        row.id === action.payload.id ? { ...action.payload } : row,
      );
    },
    deletePrescribedMedicineRow: (state, action: PayloadAction<string[]>) => {
      // TODO : delete multiple rows
    },
  },
});

export const {
  addPrescribedMedicineRow,
  updatePrescribedMedicineRow,
  deletePrescribedMedicineRow,
} = tableRowState.actions;

export default tableRowState.reducer;
