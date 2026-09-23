import type { ReactNode } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { NavItem } from "./NavItem";
import { About } from "./../../page/About";
import { Home } from "./../../page/Home";
import { Resume } from "./../../page/Resume";
import { Projects } from "./../../page/Projects";
export const NavMenu = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <BrowserRouter>
        <Link to="/">
          <NavItem onClick={Display} navname="Home" />
        </Link>
        <Link to="/about">
          <NavItem onClick={Display} navname="About Me" />
        </Link>
        <Link to="/resume">
          <NavItem onClick={Display} navname="Resume" />
        </Link>
        <Link to="/projects">
          <NavItem onClick={Display} navname="Projects" />
        </Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const Display = () => {
  console.log("This works");
};
