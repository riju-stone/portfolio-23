import React, { Suspense, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion as motion3d } from "framer-motion-3d";
import { Canvas } from "@react-three/fiber";
import { useFBX } from "@react-three/drei";

// hooks
import { useIsMobile } from "../../hooks/useMediaQuery";

//styles
import { Container } from "../../styles/globalStyles";
import { AboutPlaneSection, Content } from "../../styles/aboutStyles";

const PlaneModel = () => {
  const fbx = useFBX("assets/models/PaperAirplane.fbx");
  return <primitive object={fbx} dispose={null} />;
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} color={"#00ffbf"} />
      <directionalLight castShadow position={[0, 10, 0]} intensity={0.1} />
    </>
  );
};

const Scene = () => {
  return (
    <group factor={2} offset={1}>
      <motion3d.mesh
        position={[0, -10, -1]}
        initial={{ x: -5, z: 0, rotateY: -24, rotateX: -0.4 }}
        animate={{ x: 4, y: 0.1, z: -3, rotateX: 0.8 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <PlaneModel />
      </motion3d.mesh>
    </group>
  );
};

const AboutPlane = () => {
  const isMobile = useIsMobile();
  const animation = useAnimation();

  let rootMargin;
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: rootMargin,
  });

  useEffect(() => {
    rootMargin = isMobile ? "0" : "-350px";
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);
  return (
    <AboutPlaneSection id="about">
      <Container>
        <Content
          ref={contentRef}
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
              y: -200,
            },
          }}
        >
          - Turning <br /> Paper Balls <br />
          into <br /> Paper Planes.
        </Content>
      </Container>
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 15], fov: 70 }}
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        <Lights />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </AboutPlaneSection>
  );
};

export default AboutPlane;
