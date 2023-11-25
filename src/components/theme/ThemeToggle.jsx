import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, setThemeSwitchPos } from "./ThemeSlice";
import ThemeSwitch from "./ThemeSwitch";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.currentTheme);

  const handleSwitch = (e) => {
    dispatch(changeTheme());
    dispatch(setThemeSwitchPos({ x: e.clientX, y: e.clientY }));
  };
  return (
    <div className="mx-1" onClick={(e) => handleSwitch(e)}>
      <ThemeSwitch />
    </div>
  );
};

export default ThemeToggle;
