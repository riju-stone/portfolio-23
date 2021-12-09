import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hamburger = ({ state }) => {
  //Menu elements to animate
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);
  let link3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      //close menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.initial == false && state.clicked === true)
    ) {
      //open menu
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenu, revealMenuBackground);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <a
                      href="/about"
                      ref={(el) => (link1 = el)}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/projects" ref={(el) => (link2 = el)}>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="/contact" ref={(el) => (link3 = el)}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="info" ref={(el) => (info = el)}>
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  veritatis, recusandae aspernatur quis dolores asperiores.
                  Repellendus deleniti accusantium facere, amet similique eaque,
                  cumque voluptatibus quae nemo consectetur iusto, quibusdam
                  quas!
                </p>
              </div>
              <div className="location">
                <span>Kolkata, IN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
