import React from "react";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import ProjectSection from "../components/projects/ProjectSection";
import ConnectSection from "../components/connect/ConnectSection";

import Transition from "../components/transition/Transition";
import MaskedSection from "../components/masked/MaskedSection";
import { useDeviceDetection } from "../components/hooks/useDeviceDetection";

const HomePage = () => {
  const deviceType = useDeviceDetection();
  return (
    <Transition>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ConnectSection />
      {deviceType != "mobile" ? <MaskedSection /> : null}
    </Transition>
  );
};

export default HomePage;
