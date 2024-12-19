import { memo } from "react";
import { NavLink } from "react-router";

const NavbarComp = memo(() => {
  return (
    <nav className="flex flex-row items-center justify-center space-x-2">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/test"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Test
      </NavLink>
    </nav>
  );
});
NavbarComp.displayName = "NavbarComp";
export default NavbarComp;
