import React from "react";
import { useSelector } from "react-redux";

import ProjectItem from "./ProjectItem";
import MagneticButton from "../button/MagneticButton";
import { Link } from "react-router-dom";

const styles = {
  projectWrapper:
    "h-screen grid grid-cols-1 justify-center align-middle items-center py-[4rem] px-[2rem] ease-out duration-[0.6s]",
  projectSeparator: "h-[1px] w-full ease-out duration-[0.6s]",
  projectButtonWrapper: "grid justify-end align-middle items-center",
  projectWorksButton:
    "grid justify-center align-middle items-center break-normal bg-greenbg text-center text-lighttext h-[90px] w-[90px] font-avant-garde font-[600] rounded-full px-2 py-2"
};

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
  const disabledTextStyle = theme == "dark" ? "bg-darkdisabled" : "bg-lightdisabled";

  return (
    <section className={styles.projectWrapper}>
      {projectData.map((project, index) => {
        return (
          <div key={index + " " + project.title}>
            {index == 0 ? <div className={styles.projectSeparator + " " + disabledTextStyle}></div> : null}
            <ProjectItem projectData={project} />
            <div className={styles.projectSeparator + " " + disabledTextStyle}></div>
          </div>
        );
      })}
      <div className={styles.projectButtonWrapper}>
        <MagneticButton>
          <Link to="/works">
            <div className={styles.projectWorksButton}>All Works</div>
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
}

export default ProjectSection;
