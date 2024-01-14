import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProjectItem from "./ProjectItem";

import SkewScroll from "../skew-scroll/SkewScroll";
import { defaultCursor, focusCursor } from "../cursor/CursorSlice";

import styles from "./ProjectSection.module.scss";

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
    desc: "Role-based Authentication API using JWT & Go"
  },
  {
    title: "Url Shortner",
    role: ["Development"],
    desc: "A simple URL Shortner service build using React, Express, Typescript and MongoDB"
  },
  {
    title: "Dictionary",
    role: ["Development", "Design"],
    desc: "A beautiful minimalistic dictionary app built with React Native, Expo and Reanimated"
  },
  {
    title: "Expense Tracker",
    role: ["Design"],
    desc: "A simple expense tracker app built with React Native, Expo and Reanimated"
  }
];

function ProjectSection() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.currentTheme);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMouseEnter = (item) => {
    dispatch(focusCursor());
    setSelectedItem(item);
  };

  const handleMouseLeave = (item) => {
    dispatch(defaultCursor());
    setSelectedItem(item);
  };

  return (
    <SkewScroll>
      <section className={styles.projectSectionWrapper}>
        {projectData.map((project, index) => {
          return (
            <div
              className={styles.projectItemsWrapper}
              key={index + "-" + project.title}
              onMouseEnter={() => handleMouseEnter(project.title)}
              onMouseLeave={() => handleMouseLeave(null)}
            >
              {index == 0 ? <div className={styles.projectItemSeparator + " " + styles[theme]}></div> : null}
              <ProjectItem selectedItem={selectedItem} projectData={project} />
              <div className={styles.projectItemSeparator + " " + styles[theme]}></div>
            </div>
          );
        })}
      </section>
    </SkewScroll>
  );
}

export default ProjectSection;
