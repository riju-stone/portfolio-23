import { createSlice } from "@reduxjs/toolkit";

export const cursorSlice = createSlice({
  name: "cursor",
  initialState: {
    cursorStyle: "normal"
  },
  reducers: {
    expandCursor: (state) => {
      state.cursorStyle = "expanded";
    },
    defaultCursor: (state) => {
      state.cursorStyle = "normal";
    }
  }
});

export const { defaultCursor, lockCursor, expandCursor } = cursorSlice.actions;
export default cursorSlice.reducer;
