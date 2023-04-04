import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        currentTheme: localStorage.getItem("currentTheme") || "light",
        toggleButtonPos: { x: 0, y: 0 }
    },
    reducers: {
        changeTheme: (state) => {
            if (state.currentTheme == "light") {
                state.currentTheme = "dark";
            } else {
                state.currentTheme = "light";
            }

            localStorage.setItem("currentTheme", state.currentTheme);
        },
        setMouseClickPos: (state, action) => {
            state.toggleButtonPos.x = action.payload.x;
            state.toggleButtonPos.y = action.payload.y;
        }
    }
});

export const { changeTheme, setMouseClickPos } = themeSlice.actions;
export default themeSlice.reducer;
