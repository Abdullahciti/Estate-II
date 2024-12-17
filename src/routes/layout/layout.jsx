import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group"; 
import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout({ username }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <CSSTransition
      in={isMounted}
      timeout={800}
      classNames="fade"
      unmountOnExit
    >
      <div className="layout">
        <div className="navbar">
          <Navbar username={username} />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </CSSTransition>
  );
}

export default Layout;
