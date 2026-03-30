/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import "./navbar.scss";

import { Link } from "react-router-dom";

function Navbar() {
  const menuRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Estate II logo" />
          <span>Estate II</span>
        </Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        {/* <Link to={"/contact"}>Contact</Link>
        <Link to={"/agents"}>Agents</Link> */}
      </div>
      <div className="right">
        <Link to={"/properties"} className="link">
          Properties
        </Link>
        <div className="mobile">
          <div className="icons">
            <div
              className="menuIcon"
              style={
                isMenuOpen
                  ? { transform: "scale(0)" }
                  : { transform: "scale(1)" }
              }
            >
              <img
                src="/menu.png"
                alt="it`s an icon describes the menu"
                onClick={() => setIsMenuOpen(true)}
              />
            </div>
            <div
              className="closeIcon"
              style={
                isMenuOpen
                  ? { transform: "scale(1)" }
                  : { transform: "scale(0)" }
              }
            >
              <img
                src="/75519.png"
                alt="it`s an icon describes the menu"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          </div>
          <ul className={isMenuOpen ? "menu" : "menu close"} ref={menuRef}>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to={"/about"}>
                About
              </Link>
            </li>
            {/* <Link to={"/contact"}>Contact</Link>
            <Link to={"/agents"}>Agents</Link> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
