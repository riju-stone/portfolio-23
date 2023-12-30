import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Transition from "../components/transition/Transition";

const styles = {
  worksContainer: "h-screen flex align-middle items-center py-[4rem] px-[2rem]",
  worksTitle: "font-avant-garde font-[600] text-6xl ease-out duration-[0.6s]"
};

const worksSectionAnimation = {
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4
    }
  }
};

const titleWordAnimation = {
  hidden: {
    y: 100
  },
  show: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1
    }
  }
};

const Works = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const disabledTextStyle = theme == "dark" ? "text-darkdisabled" : "text-lightdisabled";

  return (
    <Transition>
      <motion.section
        className={styles.worksContainer}
        variants={worksSectionAnimation}
        initial="hidden"
        animate="show"
      >
        <div className={styles.worksTitle + " " + disabledTextStyle}>
          <motion.div className="overflow-hidden h-[70px]">
            <motion.div variants={titleWordAnimation}>Still</motion.div>
          </motion.div>
          <motion.div className="overflow-hidden h-[70px]">
            <motion.div variants={titleWordAnimation}>Figuring</motion.div>{" "}
          </motion.div>
          <motion.div className="overflow-hidden h-[70px]">
            <motion.div variants={titleWordAnimation}>Out some</motion.div>{" "}
          </motion.div>
          <motion.div className="overflow-hidden h-[70px]">
            <motion.div variants={titleWordAnimation}>Stuff...</motion.div>{" "}
          </motion.div>
        </div>
      </motion.section>
    </Transition>
  );
};

export default Works;
