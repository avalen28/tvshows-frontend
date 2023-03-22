import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/new"}>New Show </NavLink>
      <Link to={-1}> Go Back </Link>
    </div>
  );
}
