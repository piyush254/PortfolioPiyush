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
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
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
          <Route
            path="/skills"
            element={
              <>
                <Skill />
              </>
            }
          />
          <Route
            path="/project"
            element={
              <>
                <Project />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <h1>page not found</h1>
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
