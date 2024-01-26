import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

function SkewScroll({ children }) {
  // For Smooth Scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 2
  });

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
    stiffness: 200,
    damping: 50
  });
  const skewVelocityFactor = useTransform(skewVelocity, [-1000, 1000], [-1.8, 1.8]);

  return (
    <motion.div transition={{ duration: 0.2 }} style={{ skewY: skewVelocityFactor }}>
      {children}
    </motion.div>
  );
}

export default SkewScroll;
