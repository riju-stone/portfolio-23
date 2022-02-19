import React, { Suspense, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { motion as motion3d } from "framer-motion-3d";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useFBX, OrbitControls, ContactShadows } from "@react-three/drei";
import Model from "../../assets/models/PaperAirplane.fbx";

// hooks
import { useIsMobile } from "../../hooks/useMediaQuery";

//styles
import { Container } from "../../styles/globalStyles";
import { AboutPlaneSection, Content } from "../../styles/aboutStyles";

const PlaneModel = () => {
  const fbx = useFBX(Model);
  return <primitive object={fbx} dispose={null} />;
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={0.6}
      />
    </>
  );
};

const Scene = () => {
  const meshRef = useRef(null);
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
    <group factor={2} offset={1}>
      <motion3d.mesh
        ref={meshRef}
        position={[0, -15, -2]}
        initial={{ x: -5, rotateY: -24, rotateX: -0.4 }}
        animate={{ x: 4, y: 0.1, rotateX: 0.8 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <PlaneModel />
        <ContactShadows
          opacity={1}
          scale={10}
          blur={1}
          far={1}
          resolution={256}
        />
      </motion3d.mesh>
      <Html fullscreen>
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
      </Html>
    </group>
  );
};

const AboutPlane = () => {
  return (
    <AboutPlaneSection id="about">
      <Canvas
        colorManagement={true}
        concurrent
        camera={{ position: [0, 0, 20], fov: 70 }}
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
