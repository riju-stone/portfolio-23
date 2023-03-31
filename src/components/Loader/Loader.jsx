import React from "react";
import Rive from "rive-react";
import { AnimatePresence } from "framer-motion";

// styles
import { LoaderSection } from "../../styles/loaderStyles.js";

// RIVE animation
import Rocket from "../../assets/animations/rocket.riv";

function Loader({ onCursor }) {
	return (
		<>
			<AnimatePresence
				initial={{ y: 0 }}
				exit={{ y: -100 }}
				animate={{ y: -100 }}
				transition={{ duration: 1.8, ease: [0.6, 0.05, -0.01, 0.9] }}>
				<LoaderSection onMouseEnter={() => onCursor("hovered")}>
					<Rive src={Rocket} style={{ height: "100%", width: "25%" }} />
				</LoaderSection>
			</AnimatePresence>
		</>
	);
}

export default Loader;
