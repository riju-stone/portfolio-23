import React from "react";
import { useSelector } from "react-redux";

import styles from "./styles.module.scss";
import SkewScroll from "../skew-scroll/SkewScroll";

import { ArrowUpRight } from "lucide-react";

const data = {
  designation: ["Creative", "Full-Stack", "Developer"],
  links: ["email", "linkedin", "github", "twitter", "instagram", "youtube"]
};

function ConnectSection() {
  const theme = useSelector((state) => state.theme.currentTheme);
  return (
    <SkewScroll>
      <section className={styles.connectSectionWrapper}>
        <div className={`${styles.connectSectionContainer} ${styles[theme]}`}>
          <div className={styles.connectLines}>
            <p>{data.fname}</p>
            <p>{data.lname}</p>
          </div>

          <div className={styles.connectLines}>
            <p>{data.designation[0]}</p>
            <p>&</p>
          </div>

          <div className={styles.connectLines}>
            <p>{data.designation[1]}</p>
            <p>{data.designation[2]}</p>
          </div>

          <div className={styles.connectLinksContainer}>
            {data.links.map((link, index) => {
              return (
                <div className={styles.connectLinks} key={index}>
                  <p>{link}</p>
                  <ArrowUpRight />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SkewScroll>
  );
}

export default ConnectSection;
