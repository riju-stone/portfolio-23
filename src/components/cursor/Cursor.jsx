import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDeviceDetection } from "../hooks/useDeviceDetection";
import styles from "./Cursor.module.scss";

const Cursor = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const cursorState = useSelector((state) => state.cursor.cursorStyle);
  const deviceType = useDeviceDetection();

  const outerCursorRef = React.useRef(null);
  const innerCursorRef = React.useRef(null);

  const handleMouseMove = (e) => {
    let { clientX, clientY } = e;
    outerCursorRef.current.style.top = `${clientY}px`;
    outerCursorRef.current.style.left = `${clientX}px`;
    innerCursorRef.current.style.top = `${clientY}px`;
    innerCursorRef.current.style.left = `${clientX}px`;
  };

  if (deviceType === "mobile" || deviceType === "tablet") {
    outerCursorRef.current.style.display = `none`;
    innerCursorRef.current.style.display = `none`;
  }

  const handleMouseDown = () => {
    outerCursorRef.current.style.transform = `translate(-50%, -50%) scale(0.75)`;
  };

  const handleMouseUp = () => {
    outerCursorRef.current.style.transform = `translate(-50%, -50%)`;
  };

  const handleMouseEnter = () => {
    outerCursorRef.current.style.opacity = `1`;
    innerCursorRef.current.style.opacity = `1`;
  };

  const handleMouseOut = () => {
    outerCursorRef.current.style.opacity = `0`;
    innerCursorRef.current.style.opacity = `0`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div ref={outerCursorRef} className={styles.customCursor + " " + styles[cursorState] + " " + styles[theme]}></div>
      <div ref={innerCursorRef} className={styles.customCursorInner}></div>
    </>
  );
};

export default Cursor;
