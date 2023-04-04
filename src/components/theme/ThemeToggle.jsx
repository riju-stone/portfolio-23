import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, setMouseClickPos } from "./ThemeSlice";

import Sun from "../../assets/sun.svg";
import Moon from "../../assets/moon.svg";

const ThemeToggle = () => {
    const theme = useSelector((state) => state.theme.currentTheme);
    const dispatch = useDispatch();

    const handleSwitch = (e) => {
        dispatch(changeTheme());
        dispatch(setMouseClickPos({ x: e.pageX, y: e.pageY }));
        let toggleThemeEvent = new CustomEvent("theme-toggled");
        dispatchEvent(toggleThemeEvent);
    };
    return (
        <div className="h-full w-full flex justify-end align-middle py-4 px-6">
            {theme == "light" ? (
                <img
                    onClick={(e) => handleSwitch(e)}
                    className="h-7 w-7"
                    src={Moon}
                    alt="Dark Theme"
                />
            ) : (
                <img
                    onClick={(e) => handleSwitch(e)}
                    className="h-7 w-7"
                    src={Sun}
                    alt="Light Theme"
                />
            )}
        </div>
    );
};

export default ThemeToggle;
