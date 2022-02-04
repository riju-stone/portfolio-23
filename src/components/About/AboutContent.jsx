import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AboutSection, ContentSection } from "../../styles/aboutStyles";

// hooks
import { useIsMobile } from "../../hooks/useMediaQuery";
import CharacterAnimation from "../Character/FallAnimation";

const AboutContent = () => {
  const isMobile = useIsMobile();
  const animation = useAnimation();

  let rootMargin;
  const [quoteRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: rootMargin,
  });

  useEffect(() => {
    rootMargin = isMobile ? "0" : "-120px";
    if (inView) {
      animation.start("visible");
    }
  }, [inView]);
  return (
    <AboutSection>
      <ContentSection>
        <motion.h1
          ref={quoteRef}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] },
            },
            hidden: {
              opacity: 0,
              x: isMobile ? 0 : -120,
            },
          }}
          initial="hidden"
          animate={animation}
        >
          - Falling nine times and getting up ten...
        </motion.h1>
        <CharacterAnimation />
      </ContentSection>
    </AboutSection>
  );
};

export default AboutContent;
