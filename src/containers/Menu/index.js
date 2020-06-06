import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink to="/">Strona główna</NavLink>
      {" | "}
      <NavLink to="/about">O projekcie</NavLink>
      {" | "}
    </nav>
  );
};

export default Menu;
