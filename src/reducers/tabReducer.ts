import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define a type for the slice state
interface CounterState {
  activeTab: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  activeTab: "/consult/pastConsult",
};

export const tabSlice = createSlice({
  name: "tabChanger",
  initialState,
  reducers: {
    changeActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { changeActiveTab } = tabSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectActiveTab = (state: RootState) => state.tab.activeTab;

export default tabSlice.reducer;
