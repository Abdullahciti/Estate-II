/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import "./navbar.scss";

// Icons
import { FaRegUser } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar({ username }) {
  const { isSignedIn, setIsSignedIn } = useAuth();

  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  const handleMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleMenu);
    } else {
      document.removeEventListener("mousedown", handleMenu);
    }
  });

  return (
    <nav>
      <div className="left">
        <Link href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Estate II</span>
        </Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/agents"}>Agents</Link>
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
                showMenu ? { transform: "scale(0)" } : { transform: "scale(1)" }
              }
            >
              <img
                src="/menu.png"
                alt="it`s an icon describes the menu"
                onClick={() => setShowMenu(true)}
              />
            </div>
            <div
              className="closeIcon"
              style={
                showMenu ? { transform: "scale(1)" } : { transform: "scale(0)" }
              }
            >
              <img
                src="/75519.png"
                alt="it`s an icon describes the menu"
                onClick={() => setShowMenu(false)}
              />
            </div>
          </div>
          <ul className={showMenu ? "menu" : "menu close"} ref={menuRef}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/agents"}>Agents</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
