import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { defaultCursor, maskCursor } from "../cursor/CursorSlice";
import styles from "./MaskedSection.module.scss";

function AboutMasked() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.currentTheme);

  const maskedPhrase =
    "A full-stack developer with skills that haven't been replaced by A.I. (yet) - making good shit only if the paycheck is equally good.";

  const handleMouseEnter = () => {
    dispatch(maskCursor());
  };

  const handleMouseLeave = () => {
    dispatch(defaultCursor());
  };
  return (
    <div className={`${styles.maskedAboutSection} ${styles[theme]}`}>
      <div
        className={styles.aboutTextContainer}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <p className={styles.maskedTextContainer}>
          {maskedPhrase.split(" ").map((word, index) => {
            return (
              <span key={`${index} ${word}`} className={styles.maskedWordsWrapper}>
                <span className={styles.maskedWords}>{word}</span>
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default AboutMasked;
