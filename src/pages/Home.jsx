import React from "react";

import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import ProjectSection from "../components/projects/ProjectSection";

import Transition from "../components/transition/Transition";

const Home = () => {
  return (
    <Transition>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      {/*<SkillsSection />
      <LetsConnectSection /> */}
    </Transition>
  );
};

export default Home;
