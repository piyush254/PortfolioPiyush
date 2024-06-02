import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Project from "./Component/Project";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Contect from "./Component/Contect";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header /> <Home /> <About /> <Skills />  <Contect /> <Project />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Header /> <About />
        </>
      ),
    },
    {
      path: "/Project",
      element: (
        <>
          <Header /> <Project />
        </>
      ),
    },
    {
      path: "/skills",
      element: (
        <>
          <Header /> <Skills />
        </>
      ),
    },
    {
      path: "/Contect",
      element: (
        <>
          <Header /> <Contect />
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
