import React from "react";
import { useSelector } from "react-redux";

import styles from "./ProjectSection.module.scss";

const ProjectItem = ({ projectData }) => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const textStyle = theme == "dark" ? "text-darktext" : "text-lighttext";
  const disabledTextStyle = theme == "dark" ? "text-darkdisabled" : "text-lightdisabled";

  return (
    <div className={styles.projectItemWrapper}>
      <div className={styles.projectTitleContainer}>
        <p className={styles.projectTitle + " " + textStyle}>{projectData.title}</p>
      </div>

      <div className={styles.projectRoleWrapper + " " + disabledTextStyle}>
        {projectData.role.map((role, index) => {
          return <p key={index + " " + role}>{role}</p>;
        })}
      </div>
    </div>
  );
};

export default ProjectItem;
