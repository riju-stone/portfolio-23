import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Circle from "../../utils/circle";
import { throttle, debounce } from "../../utils/limitors";

import styles from "./GrowingCircle.module.scss";

const GrowingCircle = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const themeSwitchPos = useSelector((state) => state.theme.toggleButtonPos);
  const canvasRef = useRef(null);
  const isDark = theme == "dark";

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    let circleAnimation = null;

    const initializeAnimation = () => {
      circleAnimation = Circle.initializeCanvas(ctx, isDark);
    };

    initializeAnimation();

    let shouldStartCircleAnimation = true;

    const circleAnimationRunner = () => {
      if (circleAnimation !== null && shouldStartCircleAnimation) {
        if (circleAnimation instanceof Function) {
          circleAnimation = circleAnimation();
          circleAnimationRunner();
        } else {
          circleAnimation.then((val) => {
            circleAnimation = val();
            circleAnimationRunner();
          });
        }
      }
    };

    circleAnimationRunner();

    Circle.setCircleCenterCoordinates(themeSwitchPos.x, themeSwitchPos.y);

    const handleResize = () => {
      Circle.resetCircleCenterCoordinates();
      initializeAnimation();
      circleAnimationRunner();
    };

    window.addEventListener("resize", throttle(debounce(handleResize)));

    return () => {
      shouldStartCircleAnimation = false;
      window.removeEventListener("resize", throttle(debounce(handleResize)), false);
    };
  }, [isDark]);

  return <canvas className={styles.circleBackgroundWrapper} ref={canvasRef}></canvas>;
};
export default GrowingCircle;
