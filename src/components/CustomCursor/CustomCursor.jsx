import React, { useEffect, useRef } from "react";
import { Cursor } from "../../styles/globalStyles";
import { useGlobalStateContext } from "../../context/globalContext";

const CustomCursor = ({ toggleMenu }) => {
  const { cursorType } = useGlobalStateContext();
  const cursor = useRef(null);

  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <Cursor
        ref={cursor}
        className={`${!!cursorType ? "hovered" : ""} ${cursorType} ${
          toggleMenu ? "nav-open" : ""
        }`}
      />
    </>
  );
};

export default CustomCursor;
