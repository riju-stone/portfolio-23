import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useIsMobile } from "../../hooks/useMediaQuery";

import { Marquee, Timeline, AboutTimelineSection} from "../../styles/aboutStyles";

const AboutTimeline = () => {
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

  return(
    <AboutTimelineSection>
      
        <Marquee>
        <motion.p
          id="upper"
          ref={quoteRef}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
            },
            hidden: {
              opacity: 0,
              x: -90,
            },
          }}
          initial="hidden"
          animate={animation}
        >
          Never Lose
        </motion.p>
        <p id="author">~ Nelson Mandela</p>
        <motion.p
          id="lower"
          ref={quoteRef}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
            },
            hidden: {
              opacity: 0,
              x: 90,
            },
          }}
          initial="hidden"
          animate={animation}
        >
          Win or Learn
        </motion.p>
      </Marquee>
    </AboutTimelineSection>
  )
};

export default AboutTimeline;
