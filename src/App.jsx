import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Project from "./Component/Project";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Contect from "./Component/Contect";
import Footer from "./Component/Footer";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header /> <Home /> <About /> <Skills />  <Contect /> <Project /> <Footer/>
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Header /> <About /> <Footer/>
        </>
      ),
    },
    {
      path: "/Project",
      element: (
        <>
          <Header /> <Project /> <Footer/>
        </>
      ),
    },
    {
      path: "/skills",
      element: (
        <>
          <Header /> <Skills /> <Footer/>
        </>
      ),
    },
    {
      path: "/Contect",
      element: (
        <>
          <Header /> <Contect /> <Footer/>
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
