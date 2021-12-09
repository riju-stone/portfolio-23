import React, { useState, useEffect } from "react";
import { Cursor } from "../../styles/globalStyles";
import { useGlobalStateContext } from "../../context/globalContext";

const CustomCursor = () => {
  const { cursorType } = useGlobalStateContext();

  console.log(cursorType);

  const [mousePos, setMousePos] = useState({
    x: 400,
    y: 400,
  });

  const onMouseMove = (event) => {
    const { pageX: x, pageY: y } = event;
    setMousePos({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  return (
    <Cursor
      className={`${!!cursorType ? "hovered" : ""} ${cursorType}`}
      style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
    />
  );
};

export default CustomCursor;
