import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

function SkewScroll({ children }) {
  // For Smooth Scrolling
  const lenis = new Lenis();

  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // For Skew Scrolling Logic
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const skewVelocity = useSpring(scrollVelocity, {
    stiffness: 500,
    damping: 100
  });
  const skewVelocityFactor = useTransform(skewVelocity, [-1000, 1000], [-1.8, 1.8]);

  return <motion.div style={{ skewY: skewVelocityFactor }}>{children}</motion.div>;
}

export default SkewScroll;
