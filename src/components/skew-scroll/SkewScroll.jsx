import React from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

function SkewScroll({ children }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const skewVelocity = useSpring(scrollVelocity, {
    stiffness: 200,
    damping: 50
  });
  const skewVelocityFactor = useTransform(skewVelocity, [-1000, 1000], [-1.5, 1.5]);

  return <motion.div style={{ skewY: skewVelocityFactor }}>{children}</motion.div>;
}

export default SkewScroll;
