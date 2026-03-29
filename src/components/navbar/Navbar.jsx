/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import "./navbar.scss";

// Icons
import { FaRegUser } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar({ username }) {
  const { isSignedIn, setIsSignedIn } = useAuth();

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
        {isSignedIn && (
          <div className="user">
            <Link to="/profile" className="link">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="profile pic"
              />
            </Link>
            <span>{username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        )}
        {!isSignedIn && (
          <>
            <Link aria-label="sign-in button" to="/signin">
              Sign in
            </Link>
            <Link
              aria-label="sign-up button"
              to={"/signup"}
              className="register"
            >
              Sign up
            </Link>
          </>
        )}

        <div className="mobile">
          {!isSignedIn && (
            <Link className="user-icon" to={"/profile"}>
              <FaRegUser />
            </Link>
          )}
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
