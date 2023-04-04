import { createSlice } from "@reduxjs/toolkit";

export const cursorSlice = createSlice({
    name: "CursorState",
    initialState: {
        cursorStyle: "normal"
    },
    reducers: {
        expandCursor: (state) => {
            state.cursorStyle = "expended";
        },
        lockCursor: (state) => {
            state.cursorStyle = "locked";
        },
        defaultCursor: (state) => {
            state.cursorStyle = "normal";
        }
    }
});

export const { defaultCursor, lockCursor, expandCursor } = cursorSlice.actions;
export default cursorSlice.reducer;
