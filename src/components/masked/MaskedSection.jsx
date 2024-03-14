import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion, useScroll } from "framer-motion";

import { useDeviceDetection } from "../../hooks/useDeviceDetection";

import styles from "./MaskedSection.module.scss";
import AboutMasked from "./AboutMasked";
import HeroMasked from "./HeroMasked";

function MaskedSection() {
  const cursorState = useSelector((state) => state.cursor.cursorStyle);
  const deviceType = useDeviceDetection();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  let { scrollY } = useScroll();

  let maskSize = cursorState == "masked" ? 300 : 0;

  const handleMouseMove = (e) => {
    let { clientX, clientY } = e;
    let totalClientY = clientY + scrollY.current;
    setMousePos({ x: clientX, y: totalClientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <>
      {deviceType == "desktop" ? (
        <motion.div
          className={styles.maskedSectionWrapper}
          animate={{
            WebkitMaskPosition: `${mousePos.x - maskSize / 2}px ${mousePos.y - maskSize / 2}px`,
            WebkitMaskSize: `${maskSize}px`
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
        >
          <HeroMasked />
          <AboutMasked />
        </motion.div>
      ) : null}
    </>
  );
}

export default MaskedSection;
