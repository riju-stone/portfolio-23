import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Chrono } from "react-chrono";

//hooks
import { useIsMobile } from "../../hooks/useMediaQuery";

//styles
import SchoolSVG from "../../assets/logos/school.png";
import CodeSVG from "../../assets/logos/code.png";
import CollegeSVG from "../../assets/logos/college.png";
import JobSVG from "../../assets/logos/job.png";

import {
  Marquee,
  TimelineView,
  AboutTimelineSection,
} from "../../styles/aboutStyles";

const data = [
  {
    title: "May 2015",
  },
  {
    title: "May 2017",
  },
  {
    title: "In Between",
  },
  {
    title: "September 2020",
  },
  {
    title: "Jun - Nov 2021",
  },
  {
    title: "Dec - Present",
  },
  {
    title: "June 2022",
  },
];

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

  return (
    <AboutTimelineSection>
      <p className="title">Experience</p>
      <TimelineView>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          hideControls="true"
          items={data}
          borderLessCards="true"
          theme={{
            primary: "#09bd86",
            secondary: "#024959",
            cardBgColor: "#f2B591",
            cardForeColor: "#011826",
            titleColor: "#ffffff",
          }}
        >
          <div className="card">
            <div className="card-title">Passed 10th Grade under ICSE Board</div>
            <div className="card-subtitle">Pearls of God School</div>
            <div className="card-content">
              Started learning the fundamentals of Object Oriented Programming
              in Java.
            </div>
          </div>
          <div className="card">
            <div className="card-title">Passed 10th Grade under ICSE Board</div>
            <div className="card-subtitle">Pearls of God School</div>
            <div className="card-content">
              Started learning the fundamentals of Object Oriented Programming
              in Java.
            </div>
          </div>
          <div className="card">
            <div className="card-title">Passed 10th Grade under ICSE Board</div>
            <div className="card-subtitle">Pearls of God School</div>
            <div className="card-content">
              Started learning the fundamentals of Object Oriented Programming
              in Java.
            </div>
          </div>
          <div className="card">
            <div className="card-title">Passed 10th Grade under ICSE Board</div>
            <div className="card-subtitle">Pearls of God School</div>
            <div className="card-content">
              Started learning the fundamentals of Object Oriented Programming
              in Java.
            </div>
          </div>
          <div className="card">
            <div className="card-title">Passed 10th Grade under ICSE Board</div>
            <div className="card-subtitle">Pearls of God School</div>
            <div className="card-content">
              Started learning the fundamentals of Object Oriented Programming
              in Java.
            </div>
          </div>
          <div className="card">
            <div className="card-title">Passed 12th Grade under ISC Board</div>
            <div className="card-subtitle">Pearls of God School</div>
            <div className="card-content">
              Started learning the fundamentals of Object Oriented Programming
              in Java.
            </div>
          </div>
          <div className="card">
            <div className="card-title">Passed 10th Grade under ICSE Board</div>
            <div className="card-subtitle">Pearls of God School</div>
            <div className="card-content">
              Started learning the fundamentals of Object Oriented Programming
              in Java.
            </div>
          </div>
        </Chrono>
      </TimelineView>
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
  );
};

export default AboutTimeline;
