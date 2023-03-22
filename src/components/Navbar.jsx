import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <br />
      <NavLink to={"/new"}>New Show </NavLink>
      <br />
      <Link to={-1}> Go Back </Link>
      <br />
      <Link to={"/misterious"}> Misterios...</Link>
      <br />
    </div>
  );
}
