import React from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import "./About.css";
import { NavLink } from "react-router-dom";
import resume from "../Image/PiyushResume.pdf"
import myimage from "../Image/new.jpg"
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
          <img src={myimage} alt="Image" className="img1" />
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
          I am a good listener and have a strong understanding of various concepts. I am also a quick learner and passionate about technology. You can review my projects to see my capabilities. I love exploring advancements in technology and always maintain a positive attitude.If you give me an opportunity, I will prove myself. Self-respect is extremely important to me, and I believe my skills and qualities speak for themselves.I am an open-minded individual, and you can discuss anything with me freely. I have no issues with honest and open communication.As for my hobbies, I enjoy watching movies and playing games.Thank you very much for your time, and feel free to download my resume.
          </p>
          <a href= "https://drive.google.com/drive/folders/1xS-MkWJuXF6TrYgmEZD5-ciAh3QgUN5R" >
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
