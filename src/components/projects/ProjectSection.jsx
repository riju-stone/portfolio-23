import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { defaultCursor, focusCursor } from "../cursor/CursorSlice";

import ProjectItem from "./ProjectItem";
import MagneticButton from "../button/MagneticButton";
import SkewScroll from "../skew-scroll/SkewScroll";

import styles from "./ProjectSection.module.scss";

const projectData = [
  {
    title: "Auth API",
    role: ["Development"]
  },
  {
    title: "Url Shortner",
    role: ["Development"]
  },
  {
    title: "Dictionary",
    role: ["Development", "Design"]
  },
  {
    title: "Expense Tracker",
    role: ["Design"]
  }
];

function ProjectSection() {
  const theme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    dispatch(focusCursor());
  };

  const handleMouseLeave = () => {
    dispatch(defaultCursor());
  };

  return (
    <SkewScroll>
      <section className={styles.projectSectionWrapper}>
        {projectData.map((project, index) => {
          return (
            <div className={styles.projectItemsWrapper} key={index + " " + project.title}>
              {index == 0 ? <div className={styles.projectItemSeparator + " " + styles[theme]}></div> : null}
              <ProjectItem projectData={project} />
              <div className={styles.projectItemSeparator + " " + styles[theme]}></div>
            </div>
          );
        })}
        <div className={styles.projectButtonWrapper}>
          <MagneticButton>
            <Link to="/works">
              <div
                className={styles.projectWorksButton}
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
              >
                Works
              </div>
            </Link>
          </MagneticButton>
        </div>
      </section>
    </SkewScroll>
  );
}

export default ProjectSection;
