import React, { useEffect, useRef } from "react";
import gsap from "gsap";
function MagneticButton({ children }) {
  const magneticButtonRef = useRef(null);

  useEffect(() => {
    const xMove = gsap.quickTo(magneticButtonRef.current, "x", { duration: 0.2, ease: "elastic.out(1, 0.3)" });
    const yMove = gsap.quickTo(magneticButtonRef.current, "y", { duration: 0.2, ease: "elastic.out(1, 0.3)" });

    magneticButtonRef.current.addEventListener("mousemove", (e) => {
      console.log("Mouse Entered");
      let { clientX, clientY } = e;
      let { left, top, width, height } = magneticButtonRef.current.getBoundingClientRect();
      xMove((clientX - (left + width / 2)) * 0.5);
      yMove((clientY - (top + height / 2)) * 0.5);
    });
    magneticButtonRef.current.addEventListener("mouseleave", () => {
      xMove(0);
      yMove(0);
    });
  }, []);
  return React.cloneElement(children, { ref: magneticButtonRef });
}

export default MagneticButton;
