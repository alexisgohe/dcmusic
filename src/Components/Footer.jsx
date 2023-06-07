import React from "react";
import "../css/Footer.css";
import Logo from "../data/logo.png";

export default function Footer() {
  return (
    <div className="footer_container">
      <img className="logo_footer" src={Logo} alt="Logo Developers Code" />
      <span className="logo_span">Music</span>
    </div>
  );
}
