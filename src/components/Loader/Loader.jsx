import React from "react";
import Rive from "rive-react";
import { AnimatePresence } from "framer-motion";

// styles
import { LoaderSection } from "../../styles/loaderStyles.js";

function Loader({ onCursor }) {
  return (
    <>
      <AnimatePresence
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
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
