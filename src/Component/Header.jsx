import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <nav>
        <ul>
          <NavLink  to="/"><li><span className="FirstWord">P</span>IYUSH</li></NavLink>
          <NavLink className={(e) => e.isActive ? "Active" : ""} to="/"><li>Home</li></NavLink>
          <NavLink className={(e) => e.isActive ? "Active" : ""} to="/About"><li>About</li> </NavLink>{" "}
          <NavLink className={(e) => e.isActive ? "Active" : ""} to="/Project"><li>Project</li></NavLink>{" "}
          <NavLink className={(e) => e.isActive ? "Active" : ""} to="/skills"><li>Skills</li></NavLink>{" "}
          <NavLink className={(e) => e.isActive ? "Active" : ""} to="/Contect"><li>Contect</li> </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Header;
