import React from "react";
import { useSelector } from "react-redux";

const styles = {
  aboutContainer: "h-screen flex align-middle items-center py-[4rem] px-[2.5rem]",
  aboutTitle: "font-work-sans text-2xl ease-out duration-[0.6s]"
};

const AboutSection = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const textStyle = theme == "dark" ? "text-darktext" : "text-lighttext";
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutTitle + " " + textStyle}>
        Hi,
        <br />
        My name is Arighna Chakraborty. An aspiring developer from India
      </div>
    </section>
  );
};

export default AboutSection;
