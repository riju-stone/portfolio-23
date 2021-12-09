import React, { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";

function Header() {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: false,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 800);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <a href="/">Home</a>
            </div>
            <div className="menu">
              <button onClick={handleMenu} disabled={disabled}>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} changeState={setState} />
    </header>
  );
}

export default Header;
