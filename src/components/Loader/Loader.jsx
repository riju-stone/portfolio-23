import React from "react";
import { AnimatePresence } from "framer-motion";

// styles
import { LoaderSection } from "../../styles/loaderStyles.js";

function Loader() {
  return (
    <>
      <AnimatePresence>
        <LoaderSection>
          <div>Getting My Shit Together</div>
        </LoaderSection>
      </AnimatePresence>
    </>
  );
}

export default Loader;
