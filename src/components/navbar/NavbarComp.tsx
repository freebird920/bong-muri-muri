import { memo } from "react";
import { NavLink } from "react-router";
import GithubIcon from "../../icons/github_icon";

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
        to="/book_review"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        BookReview
      </NavLink>
      <NavLink
        to="/test"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Test
      </NavLink>

      <a
        href="https://github.com/freebird920/bong-muri-muri"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
    </nav>
  );
});
NavbarComp.displayName = "NavbarComp";
export default NavbarComp;
