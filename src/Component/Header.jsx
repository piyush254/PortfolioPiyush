import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import resume from "../Image/Piyush__Resume.pdf"

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
          <NavLink className={(e) => e.isActive ? "Active" : ""} to="/Contact"><li>Contact</li> </NavLink>
          <a href={resume} download>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mybutoon " style={{alignSelf : "end"}}>
              Download Resume
            </button>
          </a>
        </ul>
      </nav>
    </>
  );
}

export default Header;
