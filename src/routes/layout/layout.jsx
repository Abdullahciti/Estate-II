import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Layout({ username, setUsername, setPassword }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { setIsSignedIn } = useAuth();

  useEffect(() => {
    if (
      window.localStorage.getItem("username") &&
      window.localStorage.getItem("password")
    ) {
      setUsername(window.localStorage.getItem("username"));
      setPassword(window.localStorage.getItem("password"));
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
      setUsername('')
      setPassword('')
      localStorage.clear();
    }
  });

  return (
    <CSSTransition in={isMounted} timeout={800} classNames="fade" unmountOnExit>
      <div className="layout">
        <div className="navbar">
          <Navbar
            username={
              window.localStorage.getItem("password")
                ? window.localStorage.getItem("password")
                : username
            }
          />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </CSSTransition>
  );
}

export default Layout;
