import { createSlice } from "@reduxjs/toolkit";

export const cursorSlice = createSlice({
  name: "cursor",
  initialState: {
    cursorStyle: "normal"
  },
  reducers: {
    focusCursor: (state) => {
      state.cursorStyle = "focused";
    },
    maskCursor: (state) => {
      state.cursorStyle = "masked";
    },
    expandCursor: (state) => {
      state.cursorStyle = "expanded";
    },
    defaultCursor: (state) => {
      state.cursorStyle = "normal";
    }
  }
});

export const { defaultCursor, maskCursor, expandCursor, focusCursor } = cursorSlice.actions;
export default cursorSlice.reducer;
