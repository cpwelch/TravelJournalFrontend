import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import NavLinks from "./NavLinks";
import MainHeader from "./MainHeader";
import Backdrop from "../UIElements/Backdrop";

import "./mainNavigation.css";

const MainNavigation = (props) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const openSideBar = () => {
    setSideBarOpen(true);
  };

  const closeSideBar = () => {
    setSideBarOpen(false);
  };

  return (
    <React.Fragment>
      {sideBarOpen && <Backdrop onClick={closeSideBar} />}
      <SideBar show={sideBarOpen} onClick={closeSideBar}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideBar>

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openSideBar}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Tripster</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
