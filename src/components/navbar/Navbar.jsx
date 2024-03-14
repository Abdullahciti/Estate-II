import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const [user, setUser] = useState(false);
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
      <div onMouseLeave={() => setOpen(false)} className="right">
        {user ? (
          <div className="user">
            <Link to="/profile" className="link">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </Link>
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link onClick={() => setUser(true)} href="/">
              Sign in
            </Link>
            <Link href="/" className="register">
              Sign up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        {!open && (
          <motion.div
            initial={{ display: "none" }}
            animate={{ right: "-50%" }}
            transition={{ duration: 0.9 }}
            className={"menu"}
          >
            <div>
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/agents"}>Agents</Link>
              {!user && <Link href="/">Sign in</Link>}
              {!user && <Link href="/">Sign up</Link>}
            </div>
          </motion.div>
        )}
        {open && (
          <motion.div
            initial={{ right: "-50%" }}
            animate={{ right: 0, display: "flex" }}
            transition={{ duration: 0.9 }}
            className={"menu active"}
          >
            <div>
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/agents"}>Agents</Link>
              {!user && (
                <Link onClick={() => setUser(true)} href="/">
                  Sign in
                </Link>
              )}
              {!user && <Link href="/">Sign up</Link>}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
