import React from "react";
import ProjectItem from "./ProjectItem";
import "./ProjectContainer.css";
import myntra from "../Image/Myntra.png"
import IBW from "../Image/IBW.png"
import  creatingPost from "../Image/CreatingPost.png"
import  SpotifyClone from "../Image/Spotifyclone.png"

function Project() {
  const projects = [
    {
      name: "Myntra Clone",
      img: myntra,
      link: "https://piyush254.github.io/MyntraFunctionalClone/",
      about:"In this project, you can add products to your cart, view your total bill in the cart section, delete products from the cart, and get an optimized bill.Here full used of css media quary",
    },
    {
      name: "IBW Clone",
      img: IBW,
      link: "https://piyush-ibw.vercel.app/",
      about:
        "While clicking on software services customers software development is also working I have used Bootstrap for proper responsive design and a with smooth scrolling of the navbar when the user goes down while scrolling downward",
    },
    {
      name: "Creating Post",
      img: creatingPost,
      link: "https://create-cards.vercel.app/",
      about:
        "We can create post and delete post. This is a react base project where I use links and context to behave the project smoothly By the help of React Router We can go different different links without refreshing the page , With the help of fetch you can get post from server and create your post with number of likes and different tags",
    },
    {
      name: "Spotify Clone",
      img: SpotifyClone,
      link: "https://piyush254.github.io/spoitfy_clone/",
      about:
        " We can change songs pause play songs and download songs to your local machine. Build a music streaming app with user authentication, playlists.",
    },
  ];

  return (
    <>
    <h3 className="Headingh3">Click on Image to see full project</h3>
      <div className="projectcontainer">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            name={project.name}
            img={project.img}
            link={project.link}
            about={project.about}
          />
        ))}
      </div>
    </>
  );
}

export default Project;
