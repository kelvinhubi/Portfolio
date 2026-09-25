import type { ReactNode } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom";
import { NavItem } from "./NavItem";
import { About } from "./../../page/About";
import { Home } from "./../../page/Home";
import { Resume } from "./../../page/Resume";
import { Projects } from "./../../page/Projects";
import "./../../App.css";
const navLinks = [
  { path: "/", name: "Home", element: <Home /> },
  { path: "/about", name: "About", element: <About /> },
  { path: "/resume", name: "Resume", element: <Resume /> },
  { path: "/projects", name: "Projects", element: <Projects /> },
];
export const NavMenu = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link-base ${isActive ? "isActive" : "inActive"}`
                }
              >
                <NavItem navname={link.name} />
              </NavLink>
            ))}
          </nav>

          <Routes>
            {navLinks.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
