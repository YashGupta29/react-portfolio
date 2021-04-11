import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    let curURL = window.location.href;
    if (curURL.endsWith("/")) setActive("About");
    else if (curURL.endsWith("/projects")) setActive("Projects");
    // else if (curURL.endsWith("/resume")) setActive("Resume");
  }, [active]);

  return (
    <div className="navbar">
      <div className="navbar__active">{active}</div>
      <div className="navbar__items">
        {active !== "About" && (
          <Link to="/">
            <div className="navbar__item" onClick={() => setActive("About")}>
              About
            </div>
          </Link>
        )}
        {/* {active !== "Resume" && (
          <Link to="/resume">
            <div className="navbar__item" onClick={() => setActive("Resume")}>
              Resume
            </div>
          </Link>
        )} */}
        {active !== "Projects" && (
          <Link to="/projects">
            <div className="navbar__item" onClick={() => setActive("Projects")}>
              Projects
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
