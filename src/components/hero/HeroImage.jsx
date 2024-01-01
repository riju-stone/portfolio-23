import React from "react";
import { motion } from "framer-motion";

import styles from "./HeroSection.module.scss";

import I0 from "../../assets/hero/hero-1.jpeg";
import I1 from "../../assets/hero/hero-2.jpeg";
import I2 from "../../assets/hero/hero-3.jpeg";
import I3 from "../../assets/hero/hero-4.jpeg";

const imageData = [I0, I1, I2, I3];

const imageAnimation = {
  hidden: {
    x: -200
  },
  show: {
    x: 0,
    transition: {
      duration: 2,
      delay: 0.2,
      ease: [0.6, 0.01, 0.05, 0.95]
    }
  }
};

const HeroImage = () => {
  return (
    <>
      {imageData.map((image, index) => {
        return (
          <div key={index + " " + image} className={styles.heroImageMask}>
            <motion.img
              variants={imageAnimation}
              initial="hidden"
              animate="show"
              className={styles.heroImage}
              src={image}
              alt="hero image"
            />
          </div>
        );
      })}
    </>
  );
};

export default HeroImage;
