import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Circle from "../../utils/circle";
import { throttle, debounce } from "../../utils/limitors";

import styles from "./GrowingCircle.module.scss";

const GrowingCircle = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const themeSwitchPos = useSelector((state) => state.theme.toggleButtonPos);
  const canvasRef = useRef(null);
  const isDark = theme === "dark";

  useEffect(() => {
    Circle.setCircleCenterCoordinates(themeSwitchPos.x, themeSwitchPos.y);
    const ctx = canvasRef.current.getContext("2d");
    let circleAnimation = null;
    let shouldStartCircleAnimation = true;

    const initializeAnimation = () => {
      circleAnimation = Circle.initializeCanvas(ctx, isDark);
    };
    initializeAnimation();

    const circleAnimationRunner = async () => {
      if (circleAnimation !== null && shouldStartCircleAnimation) {
        if (circleAnimation instanceof Function) {
          circleAnimation = await circleAnimation();
          circleAnimationRunner();
        }
      }
    };

    circleAnimationRunner();

    const handleResize = () => {
      Circle.resetCircleCenterCoordinates();
      initializeAnimation();
      circleAnimationRunner();
    };

    window.addEventListener("resize", throttle(debounce(handleResize)), false);

    return () => {
      shouldStartCircleAnimation = false;
      window.removeEventListener("resize", throttle(debounce(handleResize)), false);
    };
  }, [isDark]);

  return <canvas className={styles.circleBackgroundWrapper} ref={canvasRef} />;
};
export default GrowingCircle;
