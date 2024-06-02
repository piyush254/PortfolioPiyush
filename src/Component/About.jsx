import React from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import "./About.css";
import { NavLink } from "react-router-dom";
import resume from "../Image/Piyush_resume.pdf"
import myimage from "../Image/image.jpg"
function About() {
  const [typeEffect] = useTypewriter({
    words: [
      "FrontEnd Develpoer...!",
      "Mern Stack Developer ...!",
      "Java Developer...!",
    ],
    loop: {},
    typeSpeed: 150,
    deletespeed: 150,
  });
  return (
    <>
      <h3
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          fontWeight: "700",
          textDecoration: "underline",
        }}
      >
        About me
      </h3>
      <div className="imagediv">
        <div className="img">
          <img src={myimage} alt="Image" />
        </div>
        <div className="info">
          <p>
            Hii i'm Piyush Kumar and I am a{" "}
            <span
              style={{
                color: "red",
              }}
            >
              {typeEffect}
            </span>
          </p>
          <p>
            And I Am good Listener As well As I Have Good UnderStanding Level
            And I Am Also Quick Learner... I Love Technology You Can Watch My
            Project.... And I Also Love To Explore In Technolgy And I Have
            Positive Attitude If You Give Me One Chance I Will Proof My Self So
            Its Does'nt Mean I Am Begging You Sir/Mam give Me Job... If You
            Really Like My Profile Then Obesely You Will Hire Me.. Because Self
            Respect Is Must Important For Me.. And I Am Fully Open Minded Guy You
            Can Ask Me AnyThing Or Disscus With Me Openly I Don't Have Any Issue
            And About My Hobby I Like Watching Movices.. And Also Playing Game
            Like PubG.. And About Future I Want To Become AI Devloper.... Thats
            All You Can Download My Resume Also... Thankyou So Much Sir/Mam..
          </p>
          <a href={resume} download>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mybutoon ">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
