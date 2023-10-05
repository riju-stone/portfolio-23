import React from "react";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      {/* <ProjectSection />
      <SkillsSection />
      <LetsConnectSection /> */}
    </div>
  );
};

export default Home;
