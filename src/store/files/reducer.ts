import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import UserFile from "../../types/UserFile";

export interface FilesState {
  userFiles: UserFile[];
  activeFiles: string[];
  editorActiveFile: string | null;
}

export const initialState: FilesState = {
  userFiles: [],
  activeFiles: [],
  editorActiveFile: null,
};

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    setFiles(state, action: PayloadAction<UserFile[]>) {
      (state.userFiles = action.payload), (state.activeFiles = []);
    },
  },
});

const filesReducer = filesSlice.reducer;
export default filesReducer;
