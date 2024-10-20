import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/actors"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Actors
      </NavLink>
      <NavLink
        to="/directors"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Directors
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default NavBar;









