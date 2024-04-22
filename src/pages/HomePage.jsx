import React, { useEffect } from "react";

import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import ProjectSection from "../components/projects/ProjectSection";
import ConnectSection from "../components/connect/ConnectSection";

import Transition from "../components/transition/Transition";
import MaskedSection from "../components/masked/MaskedSection";
import { useDeviceDetection } from "../hooks/useDeviceDetection";

const HomePage = () => {
  const deviceType = useDeviceDetection();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Transition>
      {/* <Header /> */}
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ConnectSection />
      {deviceType !== "mobile" ? <MaskedSection /> : <></>}
    </Transition>
  );
};

export default HomePage;
