import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const styles = {
    footerContainer: `w-screen flex justify-between text-[12px] font-normal align-middle items-center py-6 px-[1.5rem] font-space-grotesk z-20`
  };
  const textStyle = theme == "dark" ? "text-darkdisabled" : "text-lightdisabled";
  const date = new Date();

  return (
    <div className={styles.footerContainer + " " + textStyle}>
      <div>&copy; {date.getFullYear()}</div>
      <div>v2.0</div>
    </div>
  );
};

export default Footer;
