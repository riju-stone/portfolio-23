import React from "react";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useDeviceDetection,
  useTouchDevice
} from "../../utils/deviceType";

const cursorStyles = {
  normallight: "w-[32px] h-[32px] bg-[#122027]",
  normaldark: "w-[32px] h-[32px] bg-[#EDEDED]",
  expandedlight:
    "w-[45px] h-[45px] bg-[none] border-solid border-2 border-[#122027]",
  expandeddark:
    "w-[45px] h-[45px] bg-[none] border-solid border-2 border-[#EDEDED]",
  lockedlight:
    "h-[40px] bg-[none] border-solid border-4 border-[#122027]",
  lockeddark:
    "h-[40px] bg-[none] border-solid border-4 border-[#EDEDED]"
};

const Cursor = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const cursorState = useSelector(
    (state) => state.cursor.cursorStyle
  );
  const cursorRef = useRef(null);
  const isTouchDevice = useTouchDevice();
  const deviceType = useDeviceDetection();

  if (
    isTouchDevice ||
    deviceType === "Mobile" ||
    deviceType === "Tablet"
  ) {
    cursorRef.current.style.display = `none`;
  }

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    cursorRef.current.style.top = `${clientY}px`;
    cursorRef.current.style.left = `${clientX}px`;
  };

  const handleMouseDown = () => {
    cursorRef.current.style.transform = `translate(-50%, -50%) scale(0.75)`;
  };

  const handleMouseUp = () => {
    cursorRef.current.style.transform = `translate(-50%, -50%)`;
  };

  const handleMouseEnter = () => {
    cursorRef.current.style.opacity = `1`;
  };
  const handleMouseOut = () => {
    cursorRef.current.style.opacity = `0`;
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
    <div
      ref={cursorRef}
      className={`custom-cursor ${
        cursorStyles[cursorState + "" + theme]
      }`}
    ></div>
  );
};

export default Cursor;
