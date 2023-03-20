import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/new"}>New Show </NavLink>
      <NavLink to={() => navigate(-1)}> Go Back </NavLink>
    </div>
  );
}
