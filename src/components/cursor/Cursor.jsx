import React from "react";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDeviceDetection, useTouchDevice } from "../../utils/deviceType";

const Cursor = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const cursorState = useSelector((state) => state.cursor.cursorStyle);
  const cursorRef = useRef(null);
  const innerCursorRef = useRef(null);
  const isTouchDevice = useTouchDevice();
  const deviceType = useDeviceDetection();

  const cursorStyles = {
    light: "border-darkbg",
    dark: "border-lightbg",
    normal: "w-[32px] h-[32px] border-2 border-solid",
    expanded: "w-[48px] h-[48px] bg-[none] border-2 border-solid",
    locked: "h-[40px] !bg-[none] border-4 border-solid",
    innerCursor: "h[4px] w-[4px] border-orangebg border-2 border-solid"
  };

  if (isTouchDevice || deviceType === "Mobile" || deviceType === "Tablet") {
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
      <div ref={cursorRef} className={`custom-cursor ${cursorStyles[theme] + " " + cursorStyles[cursorState]}`}></div>
      <div ref={innerCursorRef} className={`custom-cursor-inner ${cursorStyles.innerCursor}`}></div>
    </>
  );
};

export default Cursor;
