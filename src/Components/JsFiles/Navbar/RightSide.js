import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Outlet } from "react-router-dom";
import LeftNav from "./LeftNav.js";

const RightSide = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  const handleNavItemSelect = (navItem) => {
    setSelectedNavItem(navItem);
    console.log(navItem);
  };

  return (
    <div className="main-navbar">
      <div className="left-side-navbar">
        <LeftNav handleNavItemSelect={handleNavItemSelect} />
      </div>
      <div className="right-side-navbar">
        <div className="top-right-div">
          <span>
            <HiOutlineMenuAlt2 />
          </span>
          <h2>React Project</h2>
          <span>
            <FaRegUser />
          </span>
        </div>
        <div className="down-right-div">
          <Outlet selectedNavItem={selectedNavItem} />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
