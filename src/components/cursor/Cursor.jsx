import React from "react";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDeviceDetection } from "../../utils/deviceType";
import styles from "./Cursor.module.scss";

const Cursor = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const cursorState = useSelector((state) => state.cursor.cursorStyle);
  const cursorRef = useRef(null);
  const innerCursorRef = useRef(null);
  const deviceType = useDeviceDetection();

  if (deviceType === "mobile" || deviceType === "tablet") {
    cursorRef.current.style.display = `none`;
    innerCursorRef.current.style.display = `none`;
  }

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    cursorRef.current.style.top = `${clientY}px`;
    cursorRef.current.style.left = `${clientX}px`;
    innerCursorRef.current.style.top = `${clientY}px`;
    innerCursorRef.current.style.left = `${clientX}px`;
  };

  const handleMouseDown = () => {
    cursorRef.current.style.transform = `translate(-50%, -50%) scale(0.75)`;
  };

  const handleMouseUp = () => {
    cursorRef.current.style.transform = `translate(-50%, -50%)`;
  };

  const handleMouseEnter = () => {
    cursorRef.current.style.opacity = `1`;
    innerCursorRef.current.style.opacity = `1`;
  };

  const handleMouseOut = () => {
    cursorRef.current.style.opacity = `0`;
    innerCursorRef.current.style.opacity = `0`;
  };

  useEffect(() => {
    if (cursorRef.current.style.display !== `none`) {
      document.addEventListener("mouseleave", handleMouseOut);
      document.addEventListener("mouseenter", handleMouseEnter);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mouseleave", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.customCursor + " " + styles[cursorState] + " " + styles[theme]}></div>
      <div ref={innerCursorRef} className={styles.customCursorInner}></div>
    </>
  );
};

export default Cursor;
