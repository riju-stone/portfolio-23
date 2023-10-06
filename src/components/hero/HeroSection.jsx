import React from "react";
import { useSelector } from "react-redux";
import { COLORS } from "../../utils/constants";

const styles = {
  heroContainer: "flex flex-col h-screen justify-center align-middle items-center px-10",
  heroTitle: "font-work-sans font-normal text-6xl text-center ease-out duration-[0.6s]",
  heroLeftTitle: "absolute font-playfair top-[4rem] left-[2.5rem] text-left",
  heroRightTitle: "absolute font-playfair bottom-[2.5em] right-[2.5rem] text-right z-[5]",
  arrow: "h-16 w-16 my-4 ease-out duration-[0.6s]",
  backgroundImage: "absolute bottom-0 z-0"
};

const HeroSection = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const colorStyle = theme == "dark" ? COLORS.light : COLORS.dark;
  const textStyle = theme == "dark" ? "text-darktext" : "text-lighttext";
  const disabledTextStyle = theme == "dark" ? "text-darkdisabled" : "text-lightdisabled";

  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroLeftTitle + " " + disabledTextStyle}>
        Full-Stack Developer
        <br />
        with a love for Design ...
      </div>
      <div className={styles.heroTitle + " " + textStyle}>
        <div>Multi-</div>
        <div>Disciplinary</div>
        <div>Developer</div>
      </div>
      <div>
        <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z"
            fill={COLORS.orange}
          ></path>
        </svg>
      </div>
      <div className={styles.heroRightTitle + " " + disabledTextStyle}>
        ... and emphasis on
        <br />
        unique user experiences
      </div>
    </section>
  );
};

export default HeroSection;
