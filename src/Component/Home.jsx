import React from "react";
// import Typewriter from 'typewriter-effect/dist/core';
import myimage from "../Image/new.jpg"
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import Project from "./Project";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contect";
import "./Home.css";
function Home() {
  const [typeEffect] = useTypewriter({
    words: [
      "FrontEnd Develpoer...!",
      "Mern Stack Developer ...!",
      "Java Developer...!",
    ],
    loop: {},
    typeSpeed: 150,
    deletespeed: 50,
  });
  return (
    <>
      <div className="infor">
        <div className="type">
          <p className="Hi">Hello my Name is </p>
          <p className="Name">Piyush Kumar</p>
          <p className="Hi">
            And I'm a{" "}
            <span style={{ fontWeight: 700, color: "red" }}>{typeEffect}</span>{" "}
          </p>
          <a href="https://www.linkedin.com/in/piyush-kumar-9071a1202/?original_referer=http%3A%2F%2Flocalhost%3A5173%2F">
          <button className="btnhireme">Hire ME</button></a>
        </div>
        <div className="image">
        <img src={myimage} alt="image" />
        </div>
      </div>
      <About /> <Skills /> <Contact /> <Project />
    </>
  );
}

export default Home;
