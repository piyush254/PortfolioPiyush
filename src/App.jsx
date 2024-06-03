import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Project from "./Component/Project";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Contact from "./Component/Contect";
import Footer from "./Component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skill from "./Component/Skills";
function App() {
  // const router = createBrowserRouter([

  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <Header /> <Home /> <About /> <Skills />  <Contact /> <Project /> <Footer/>
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/About",
  //     element: (
  //       <>
  //         <Header /> <About /> <Footer/>
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/Project",
  //     element: (
  //       <>
  //         <Header /> <Project /> <Footer/>
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/skills",
  //     element: (
  //       <>
  //         <Header /> <Skills /> <Footer/>
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/Contact",
  //     element: (
  //       <>
  //         <Header /> <Contact /> <Footer/>
  //       </>
  //     ),
  //   },
  // ]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home /> <About /> <Skills /> <Contact /> <Project />
              </>
            }
          />
          <Route
            path="/About"
            element={
              <>
                <About />
              </>
            }
          />
          <Route path="/skills" element = {
            <>
              <Skill/>
            </>
          } />
          <Route path="/project" element = {
            <>
              <Project/>
            </>
          } /><Route path="/contact" element = {
            <>
              <Contact/>
            </>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
