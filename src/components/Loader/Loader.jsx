import React from "react";
import Rive from "rive-react";
import { AnimatePresence } from "framer-motion";

import Rocket from "../../assets/animations/rocket.riv";
// styles
import { LoaderSection } from "../../styles/loaderStyles.js";

function Loader({ onCursor }) {
  return (
    <>
      <AnimatePresence>
        <LoaderSection onMouseEnter={() => onCursor("hovered")}>
          <Rive src={Rocket} style={{ height: "100%", width: "25%" }} />
          {/* <div>
            Setting things <br />
            in Motion
          </div> */}
        </LoaderSection>
      </AnimatePresence>
    </>
  );
}

export default Loader;
