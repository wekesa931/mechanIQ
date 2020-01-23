import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../Navigation.scss";

export interface NavItemsProps {}

const NavItems: React.SFC<NavItemsProps> = () => {
  // @ts-ignore
  const checkAuth = useSelector(state => state.authenticate.loggedIn);

  let label = <Link to="/authenticate">Log in</Link>;
  if (checkAuth) {
    label = <Link to="/profile">Profile</Link>;
  }

  // @ts-ignore

  return (
    <div className="navItems-items">
      <p className="navItems-items-nav">Home</p>
      <p className="navItems-items-nav">Guidelines</p>
      <p className="navItems-items-nav">Resources</p>
      <p className="navItems-items-nav">Pattterns</p>
      <p className="navItems-items-nav">{label}</p>
    </div>
  );
};

export default NavItems;
