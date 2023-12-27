import React from "react";
import { useSelector } from "react-redux";

const styles = {
  errorContainer: "h-screen flex justify-center align-middle items-center py-[4rem] px-[2rem]",
  errorCode: "font-space-grotesk font-normal text-[10rem] text-center ease-out duration-[0.6s]"
};

const Error = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const disabledTextStyle = theme == "dark" ? "text-darkdisabled" : "text-lightdisabled";
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorCode + " " + disabledTextStyle}>404</div>
    </div>
  );
};

export default Error;
