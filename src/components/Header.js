import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../assets/logo.png";
import menus from "../assets/menu.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const windowWidth = document.documentElement.clientWidth;
    windowWidth < 600 ? setMenu(true) : setMenu(false);
    window.addEventListener("resize", getDimensions);
  }, []);

  const getDimensions = () => {
    const windowWidth = document.documentElement.clientWidth;
    windowWidth < 600 ? setMenu(true) : setMenu(false);
  };

  return (
    <div id="header-container">
      <div id="inner-header">
        <div id="logo">
          <img id="image" src={logo} alt="icon" />
        </div>
        <div id="menu-item">
          {menu && <img id="image2" src={menus} alt="icon" />}
          <div id="menu-list">
            <div className="menu-text">
              <Link
                style={{ listStyle: "none", textDecorationLine: "none" }}
                to="/"
              >
                Home
              </Link>
            </div>
            <div className="menu-text">About</div>
            <div className="menu-text">Contact</div>
            <div className="menu-text">FAQ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
