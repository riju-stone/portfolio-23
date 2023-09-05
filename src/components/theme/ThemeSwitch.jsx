import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme, setThemeSwitchPos } from "./ThemeSlice";
import { motion } from "framer-motion";

const ThemeSwitch = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const dispatch = useDispatch();

  const handleSwitch = (e) => {
    dispatch(changeTheme());
    dispatch(setThemeSwitchPos({ x: e.pageX, y: e.pageY }));
  };

  const animations = {
    sun: {},
    moon: {},
    sunBeams: {
      light: {
        rotateZ: -75,
        opacity: 1,
        transition: {
          duration: 0.5
        }
      },
      dark: {
        rotateZ: 0,
        opacity: 0,
        transition: {
          duration: 0.5
        }
      }
    },
    moonCircle: {
      light: {
        x: 0,
        transition: {
          duration: 0.8
        }
      },
      dark: {
        x: -7,
        transition: {
          duration: 0.8
        }
      }
    }
  };

  return (
    <button
      className="theme-switch"
      title="Theme Toggle Switch"
      aria-label="auto"
      aria-live="polite"
      onClick={(e) => handleSwitch(e)}
    >
      <motion.svg
        className="sun-moon h-10 w-10"
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <motion.circle
          className="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill={theme == "light" ? "#145256" : "#29F996"}
        />
        <motion.g
          className="sun-beams strole-[2px]"
          stroke={theme == "light" ? "#145256" : "#29F996"}
          variants={animations.sunBeams}
          animate={theme == "light" ? "light" : "dark"}
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.g>
        <motion.mask className="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <motion.circle
            cx="24"
            cy="10"
            r="6"
            fill="black"
            variants={animations.moonCircle}
            animate={theme == "light" ? "light" : "dark"}
          />
        </motion.mask>
      </motion.svg>
    </button>
  );
};

export default ThemeSwitch;
