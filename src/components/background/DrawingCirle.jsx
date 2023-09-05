import React, { useRef } from "react";
import { useSelector } from "react-redux";

const DrawingCircle = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const canvasRef = useRef(null);

  const styles = {
    light: "fixed h-screen w-screen -z-10 bg-[#29F996]",
    dark: "fixed h-screen w-screen -z-10 bg-[#145256]"
  };

  return (
    <canvas
      className={theme === "dark" ? styles.dark : styles.light}
      ref={canvasRef}
    ></canvas>
  );
};

export default DrawingCircle;
