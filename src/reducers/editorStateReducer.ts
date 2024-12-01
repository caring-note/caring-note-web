import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditorState } from "draft-js";
import type { RootState } from "./store";

// Define a type for the slice state
interface EditorStateState {
  editorState: EditorState;
}

// Define the initial state using that type
const initialState: EditorStateState = {
  editorState: EditorState.createEmpty(),
};

export const editorState = createSlice({
  name: "editorStateChanger",
  initialState,
  reducers: {
    changeEditorState: (state, action: PayloadAction<EditorState>) => {
      state.editorState = action.payload;
    },
  },
});

export const { changeEditorState } = editorState.actions;

export const selectActiveTab = (state: RootState) =>
  state.editorState.editorState;

export default editorState.reducer;
