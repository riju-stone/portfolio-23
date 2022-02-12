import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

// hooks
import { useIsMobile } from "../../hooks/useMediaQuery";
//styles
import { Container } from "../../styles/globalStyles";
import { AboutPlaneSection, Content } from "../../styles/aboutStyles";

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
    <AboutPlaneSection>
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
    </AboutPlaneSection>
  );
};

export default AboutPlane;
