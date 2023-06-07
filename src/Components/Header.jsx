import React from "react";

import "../css/Header.css";

import Logo from "../data/logo.png";

import { ButtonAction } from "./ButtonAction.js";

export default function Header() {
  return (
    <nav className="nav_container">
      <div className="nav_logo">
        <img className="logo_nav" src={Logo} alt="Logo Developers Code" />
        <span>Music</span>
      </div>
      <ButtonAction type="button" $nav>Nuevo video</ButtonAction>
    </nav>
  );
}
