import React, { useEffect, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import WaveMaterial from "./WaveMaterial";

//hooks
import { useIsMobile } from "../../hooks/useMediaQuery";
//styles
import { WaveSceneSection } from "../../styles/homeStyles";

const WaveScene = () => {
  const isMobile = useIsMobile();
  const animation = useAnimation();
  let rootMargin;
  const [sceneRef, inView] = useInView({
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
    <WaveSceneSection
      ref={sceneRef}
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
          y: 200,
        },
      }}
    >
      <Canvas concurrent shadowMap camera={{ position: [0, 0, 3], fov: 85 }}>
        <Suspense fallback={null}>
          <WaveMaterial />
        </Suspense>
        <ambientLight intensity={0.6} />
      </Canvas>
    </WaveSceneSection>
  );
};

export default WaveScene;
