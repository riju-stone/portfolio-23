import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Circle from "../../utils/circle";
import { throttle, debounce } from "../../utils/limitors";
import { COLORS } from "../../utils/constants";

const GrowingCircle = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const themeSwitchPos = useSelector(
    (state) => state.theme.toggleButtonPos
  );
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    let circleAnimation = Circle.initializeCanvas(ctx, theme);
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

    Circle.setCircleCenterCoordinates(
      themeSwitchPos.x,
      themeSwitchPos.y
    );

    const handleResize = () => {
      Circle.resetCircleCenterCoordinates();
      Circle.initializeCanvas(ctx, theme);
      circleAnimationRunner();
    };

    window.addEventListener(
      "resize",
      throttle(debounce(handleResize))
    );

    return () => {
      shouldStartCircleAnimation = false;
      window.removeEventListener(
        "resize",
        throttle(debounce(handleResize)),
        false
      );
    };
  }, [theme]);

  return (
    <canvas
      className={`fixed bg-[${COLORS.dark}] w-screen h-screen -z-10`}
      ref={canvasRef}
    ></canvas>
  );
};

export default GrowingCircle;
