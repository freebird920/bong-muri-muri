import { memo } from "react";
import { NavLink } from "react-router";

const NavbarComp = memo(() => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
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
