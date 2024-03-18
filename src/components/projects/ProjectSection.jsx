import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProjectItem from "./ProjectItem";

import SkewScroll from "../skew-scroll/SkewScroll";
import { defaultCursor, focusCursor } from "../cursor/CursorSlice";

import styles from "./ProjectSection.module.scss";
import { useDeviceDetection } from "../../hooks/useDeviceDetection";

const projectData = [
  {
    title: "Chess",
    role: ["Development", "Design"],
    desc: "A Simple Chess Engine with a beautiful GUI. Developed using Electron and Javascript."
  },
  {
    title: "Caligator",
    role: ["Development"],
    desc: "An open source kickass cross platform smart calculator. Developed using Electron and Javascript."
  },
  {
    title: "Auth API",
    role: ["Development"],
    desc: "Role-based Authentication API using Go, MongoDB and JWT"
  },
  {
    title: "Url Shortner",
    role: ["Development"],
    desc: "A simple URL Shortner service build using React, Express, Typescript and MongoDB"
  },
  {
    title: "Dictionary",
    role: ["Development", "Design"],
    desc: "A beautiful minimalistic dictionary app built with React-Native, Expo and Reanimated"
  },
  {
    title: "Expense Tracker",
    role: ["Design"],
    desc: "A simple expense tracker app designed with Figma"
  }
];

function ProjectSection() {
  const dispatch = useDispatch();
  const deviceType = useDeviceDetection();
  const theme = useSelector((state) => state.theme.currentTheme);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMouseEnter = (item) => {
    if (deviceType !== "mobile") {
      dispatch(focusCursor());
      setSelectedItem(item);
    }
  };

  const handleMouseLeave = (item) => {
    if (deviceType !== "mobile") {
      dispatch(defaultCursor());
      setSelectedItem(item);
    }
  };

  return (
    <SkewScroll>
      <section className={styles.projectSectionWrapper}>
        {projectData.map((project, index) => {
          return (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              className={styles.projectItemsWrapper}
              key={`${index}-${project.title}`}
              onMouseEnter={() => handleMouseEnter(project.title)}
              onMouseLeave={() => handleMouseLeave(null)}
              onClick={() => setSelectedItem(project.title)}
            >
              {index === 0 ? <div className={`${styles.projectItemSeparator} ${styles[theme]}`} /> : null}
              <ProjectItem selectedItem={selectedItem} projectData={project} />
              <div className={`${styles.projectItemSeparator} ${styles[theme]}`} />
            </div>
          );
        })}
      </section>
    </SkewScroll>
  );
}

export default ProjectSection;
