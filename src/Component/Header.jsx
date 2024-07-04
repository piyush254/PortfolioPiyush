import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import resume from "../Image/Piyush__Resume.pdf";

function Header() {
  return (
    <>
      <nav>
        <ul className="flex items-center">
          <NavLink to="/"><li><span className="FirstWord">P</span>IYUSH</li></NavLink>
          <NavLink className={(e) => e.isActive ? "Active" : ""} to="/"><li>Home</li></NavLink>
          <NavLink className={(e) => e.isActive ? "Active" : ""} to="/About"><li>About</li></NavLink>
          <NavLink className={(e) => e.isActive ? "Active" : ""} to="/Project"><li>Project</li></NavLink>
          <NavLink className={(e) => e.isActive ? "Active" : ""} to="/skills"><li>Skills</li></NavLink>
          <NavLink className={(e) => e.isActive ? "Active" : ""} to="/Contact"><li>Contact</li></NavLink>
          <div className="ml-auto">
            <a href={resume} download>
              <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
                Download Resume
              </button>
            </a>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Header;
