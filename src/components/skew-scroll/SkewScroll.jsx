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
    smoothTouch: false,
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
  const skewVelocityFactor = useTransform(skewVelocity, [-1000, 1000], [-1.2, 1.2]);

  return <motion.div style={{ skewY: skewVelocityFactor }}>{children}</motion.div>;
}

export default SkewScroll;
