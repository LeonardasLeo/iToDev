import React from "react";
import "../styles/components/header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="main-title">
        MAY THE FORCE <br /> BE WITH YOU
      </h1>
      <p>No, I am your father.</p>
      <p>I find your lack of faith disturbing.</p>
    </header>
  );
};

export default Header;
