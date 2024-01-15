import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./MaskedSection.module.scss";
import { defaultCursor, maskCursor } from "../cursor/CursorSlice";

import heroImage from "../../assets/hero/hero-image.jpeg";

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
      <div
        className={styles.maskedHeroImageWrapper}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className={styles.maskedHeroTitleContainer}>
          <p>Multi-Disciplinary</p>
        </div>
        <img src={heroImage} />
        <div className={styles.maskedHeroSubTitleContainer}>
          <p>Creative Developer</p>
        </div>
      </div>
    </div>
  );
}

export default HeroMasked;
