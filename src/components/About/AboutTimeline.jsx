import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Chrono } from "react-chrono";

//hooks
import { useIsMobile, useIsSmallTablet } from "../../hooks/useMediaQuery";

import {
  Marquee,
  TimelineView,
  AboutTimelineSection,
} from "../../styles/aboutStyles";

const dates = [
  {
    title: "September 2020",
  },
  {
    title: "May - Oct 2021",
  },
  {
    title: "Nov - May 2022",
  },
  {
    title: "May 2022",
  },
  {
    title: "July 2022",
  },
];

const timelineData = [
  {
    title: "Completed Bachelor's in Computer Science",
    subtitle: "Vidyasagar College, University of Calcutta",
    content:
      "Learned basics in C, C++, Data Structures, Algorithms, and Operating Systems.",
  },
  {
    title: "Software Developer Intern",
    subtitle: "Skill Academia",
    content:
      "Developed a cross-platform mobile application built with Flutter and Firebase item | Wrote and reviewed code for company website using React",
  },
  {
    title: "Full Stack Intern",
    subtitle: "Simulacra Technologies",
    content:
      "Worked on numerous frontend projects using React. | Worked on backend systems and Restful APIs using Golang and Node.",
  },
  {
    title: "Completed Master's in Computer Science",
    subtitle: "St. Xavier's College (Autonomous), Kolkata",
    content:
      "Started learning the fundamentals of Object Oriented Programming in Java.",
  },
  {
    title: "Software Developer",
    subtitle: "Zineone Inc.",
    content:
      "Started learning the fundamentals of Object Oriented Programming in Java.",
  },
];

const AboutTimeline = () => {
  const isMobile = useIsMobile();
  const isSmallTablet = useIsSmallTablet();
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
          mode={isMobile || isSmallTablet ? "VERTICAL" : "VERTICAL_ALTERNATING"}
          hideControls="true"
          items={dates}
          borderLessCards="true"
          theme={{
            primary: "#09bd86",
            secondary: "#024959",
            cardBgColor: "#f2B591",
            cardForeColor: "#011826",
            titleColor: "#ffffff",
          }}
        >
          {timelineData.map((data, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-title">{data.title}</div>
                <div className="card-subtitle">{data.subtitle}</div>
                <div className="card-content">{data.content}</div>
              </div>
            );
          })}
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
