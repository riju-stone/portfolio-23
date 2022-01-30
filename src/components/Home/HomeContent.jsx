import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

// hooks
import useIsMobile from "../../hooks/useMediaQuery";
import Hero from "../Hero/Hero";
//styles
import { Container } from "../../styles/globalStyles";
import { HomeContentSection, Content } from "../../styles/homeStyles";

const HomeContent = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <HomeContentSection
      ref={contentRef}
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
          y: 100,
        },
      }}
    >
      <Hero />
      <Container>
        <Content>
          - Turning <br /> Paper Balls <br />
          into <br /> Paper Planes.
        </Content>
      </Container>
    </HomeContentSection>
  );
};

export default HomeContent;
