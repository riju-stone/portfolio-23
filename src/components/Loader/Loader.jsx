import React from "react";
import Rive from "rive-react";
import { AnimatePresence } from "framer-motion";

// styles
import { LoaderSection } from "../../styles/loaderStyles.js";

function Loader({ onCursor }) {
  return (
    <>
      <AnimatePresence>
        <LoaderSection onMouseEnter={() => onCursor("hovered")}>
          <Rive
            src="assets/animations/rocket.riv"
            style={{ height: "100%", width: "25%" }}
          />
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
