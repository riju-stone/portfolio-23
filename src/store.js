import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./components/theme/ThemeSlice";
import cursorReducer from "./components/cursor/CursorSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    cursor: cursorReducer
  }
});
