import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/icons/logo.svg";

const Header = (props) => {
  return (
    <header className="header" id="nav">

      <nav className="nav">

        <Link to="/" className="nav__logo">
          <img src={Logo} alt="Frontend.log Logo" />
          <h1>Sladio.log</h1>
        </Link>

        <div className="nav__links"></div>

      </nav>
    </header>
  );
};

export default Header;
