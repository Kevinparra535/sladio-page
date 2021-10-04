/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";

export default (props) => {
  return (
    <Menu {...props}>
      <Link to="/">Home</Link>
      <Link to="/docs">Documentación</Link>
      <Link to="/demo">Demos</Link>
      <a
        href="https://frontendamdin.web.app/"
        className="nav__links"
        data-animation="center"
        rel="noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://frontendamdin.web.app/"
        className="nav__links--primary"
        data-animation="center"
        rel="noreferrer"
      >
        Kevin Parra
      </a>
    </Menu>
  );
};
