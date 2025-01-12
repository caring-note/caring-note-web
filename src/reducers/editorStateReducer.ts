import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditorState } from "draft-js";

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
export default editorState.reducer;
