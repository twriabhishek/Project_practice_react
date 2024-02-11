import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = ({ handleNavItemSelect }) => {
  return (
    <div className="left-nav-sec">
      <main>
        <NavLink to="counter" onClick={() => handleNavItemSelect("first")}>
          <div>
            <p>First</p>
          </div>
        </NavLink>
        <NavLink to="changeColor" onClick={() => handleNavItemSelect("second")}>
          <div>
            <p>second</p>
          </div>
        </NavLink>
        <NavLink to="cardProps" onClick={() => handleNavItemSelect("third")}>
          <div>
            <p>third</p>
          </div>
        </NavLink>
        <NavLink
          to="pass_generator"
          onClick={() => handleNavItemSelect("fourth")}
        >
          <div>
            <p>fourth</p>
          </div>
        </NavLink>
        <NavLink
          to="currency_convertor"
          onClick={() => handleNavItemSelect("fifth")}
        >
          <div>
            <p>fifth</p>
          </div>
        </NavLink>
      </main>
    </div>
  );
};

export default LeftNav;
