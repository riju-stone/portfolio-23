import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

import styles from "./styles.module.scss";

const ProjectItem = ({ selectedItem, projectData }) => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const titleContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleContainer,
    offset: ["start end", `${25 / 0.4}vw end`]
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <>
      <div ref={titleContainer} className={styles.projectItemWrapper}>
        <div className={styles.projectTitleContainer}>
          <motion.p className={`${styles.projectDisabledTitle} ${styles[theme]}`}>{projectData.title}</motion.p>
          <motion.p className={`${styles.projectTitle} ${styles[theme]}`} style={{ clipPath: clip }}>
            {projectData.title}
          </motion.p>
        </div>
        <div className={`${styles.projectRoleWrapper} ${styles[theme]}`}>
          {projectData.role.map((role, index) => {
            return <p key={`${index} ${role}`}>{role}</p>;
          })}
        </div>
      </div>
      <div
        className={`${styles.projectMaskedItemWrapper} ${styles[theme]}`}
        style={{ clipPath: selectedItem === projectData.title ? "inset(0 0 0)" : "inset(50% 0 50%)" }}
      >
        <div className={styles.projectTitleContainer}>
          <p className={styles.projectTitle}>{projectData.title}</p>
        </div>
        <div className={styles.projectDescriptionWrapper}>{projectData.desc}</div>
      </div>
    </>
  );
};

export default ProjectItem;
