import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./MaskedSection.module.scss";
import { defaultCursor, maskCursor } from "../cursor/CursorSlice";

function HeroMasked() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.currentTheme);

  const handleMouseEnter = () => {
    dispatch(maskCursor());
  };

  const handleMouseLeave = () => {
    dispatch(defaultCursor());
  };

  return (
    <div className={styles.maskedHeroSection + " " + styles[theme]}>
      <p onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
        Arighna
        <br />
        Chakraborty
      </p>
    </div>
  );
}

export default HeroMasked;
