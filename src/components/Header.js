import React from "react";
import "../styles.css";

const Header = ({ scrollToSection, homeRef, aboutRef, contactRef }) => {
  return (
    <header className="header">
      <h1 className="logo">MovieZone</h1>
      <nav className="nav">
        <button className="nav-button" onClick={() => scrollToSection(homeRef)}>Home</button>
        <button className="nav-button" onClick={() => scrollToSection(aboutRef)}>About</button>
        <button className="nav-button" onClick={() => scrollToSection(contactRef)}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;