import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./components/theme/ThemeSlice";

export default configureStore({
    reducer: {
        theme: themeReducer
    }
});
