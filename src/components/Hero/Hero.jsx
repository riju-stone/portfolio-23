import React, { useEffect, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Wave from "./Wave";

//hooks
import { useIsMobile } from "../../hooks/useMediaQuery";
//styles
import { HeroSection } from "../../styles/homeStyles";

const Hero = () => {
  const isMobile = useIsMobile();
  const animation = useAnimation();
  let rootMargin;
  const [heroRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: rootMargin,
  });

  useEffect(() => {
    rootMargin = isMobile ? "-200px" : "-350px";
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
          transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {
          opacity: 0,
          y: 300,
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
