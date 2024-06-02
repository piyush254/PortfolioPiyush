import React from 'react'
import { NavLink } from "react-router-dom";
import "./ProjectContainer.css"
function ProjectItem({ name, img, link , about }) {
  return (
    <>
    <div className="information">
    <NavLink to={link}><img src={img} alt= "image" /></NavLink>
    <h3>{name}</h3>
    <p><span>About</span> : {about}</p>
    </div>
    </>
  )
}

export default ProjectItem