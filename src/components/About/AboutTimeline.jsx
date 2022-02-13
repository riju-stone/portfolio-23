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
    cardTitle: "Passed 10th Grade under ICSE Board",
    cardSubtitle: "Pearls of God School",
    cardDetailedText:
      "Started learning the fundamentals of Object Oriented Programming in Java.",
  },
  {
    title: "May 2017",
    cardTitle: "Passed 12th Grade under ISC Board",
    cardSubtitle: "Pearls of God School",
    cardDetailedText:
      "I pursued science in 12th grade and that's when I started to realise the potential and applications of Computers.",
  },
  {
    title: "In Between",
    cardSubtitle: "Started learning Javascript and Flutter",
  },
  {
    title: "September 2020",
    cardTitle: "Completed Bachelors of Science in CS",
    cardSubtitle: "University of Calcutta",
    cardDetailedText:
      "I pursued science in 12th grade and that's when I started to realise the potential and applications of Computers.",
  },
  {
    title: "Jun - Nov 2021",
    cardTitle: "Skill Academia",
    cardSubtitle: "Full Stack Developer Intern",
    cardDetailedText:
      "I pursued science in 12th grade and that's when I started to realise the potential and applications of Computers.",
  },
  {
    title: "Dec - Present",
    cardTitle: "Simulacra Technologies",
    cardSubtitle: "Backend Developer Intern",
  },
  {
    title: "June 2022",
    cardTitle: "Expected Completion of Masters of Science in CS",
    cardSubtitle: "St. Xavier's College",
    cardDetailedText:
      "I pursued science in 12th grade and that's when I started to realise the potential and applications of Computers.",
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
          {/* <div className="chrono-icons">
            <img src={SchoolSVG} alt="image1" />
            <img src={SchoolSVG} alt="image1" />
            <img src={CodeSVG} alt="image1" />
            <img src={CollegeSVG} alt="image1" />
            <img src={JobSVG} alt="image1" />
            <img src={JobSVG} alt="image1" />
            <img src={CollegeSVG} alt="image1" />
          </div> */}
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
