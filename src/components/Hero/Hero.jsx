import React, { useEffect, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Wave from "./Wave";

//styles
import { HeroSection } from "../../styles/heroStyles";

const Hero = () => {
  const animation = useAnimation();
  const [heroRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "120px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <HeroSection
      ref={heroRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {
          opacity: 0,
          y: -72,
        },
      }}
    >
      <Canvas camera={{ position: [0, 0, 3], fov: 85 }}>
        <Suspense fallback={null}>
          <Wave />
        </Suspense>
        <ambientLight intensity={0.4} />
      </Canvas>
    </HeroSection>
  );
};

export default Hero;
