import React from "react";
import { useSelector } from "react-redux";

const styles = {
  projectItemWrapper: "flex h-[20%] justify-between align-middle items-center ",
  projectDetailsWrapper: "flex-col",
  projectTitleWrapper: "flex justify-between align-middle items-center",
  projectTitle: "font-avant-garde text-left text-2xl font-[700] ease-out duration-[0.6s]",
  projectStackWrapper: "flex flex-wrap items-center text-[12px] mt-2",
  projectStackItem: "mr-2 font-caveat px-2 py-[0.2rem] text-greenbg rounded-xl my-1 ease-out duration-[0.6s]",
  projectArrowWrapper: "relative h-[30px] w-[30px] right-2",
  projectRole: "flex-col font-space-grotesk text-sm text-right ease-out duration-[0.6s]"
};

const ProjectItem = ({ projectData }) => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const textStyle = theme == "dark" ? "text-darktext" : "text-lighttext";
  const disabledTextStyle = theme == "dark" ? "text-darkdisabled" : "text-lightdisabled";

  return (
    <div className={styles.projectItemWrapper}>
      <div className={styles.projectDetailsWrapper}>
        <div className={styles.projectTitleWrapper}>
          <p className={styles.projectTitle + " " + textStyle}>{projectData.title}</p>
        </div>
      </div>
      <div className={styles.projectRole + " " + disabledTextStyle}>
        {projectData.role.map((role, index) => {
          return <p key={index + " " + role}>{role}</p>;
        })}
      </div>
    </div>
  );
};

export default ProjectItem;
