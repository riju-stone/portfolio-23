import React from "react";
import Rive, { useRive } from "rive-react";

import Fall from "../../assets/animations/fall.riv";

const CharacterAnimation = () => {
  return <Rive src={Fall} />;
};

export default CharacterAnimation;
