import React from "react";
import { Link } from "react-router-dom";

import Sladio from "sladio";
import '../../node_modules/sladio/build/css/core.css';


const Home = () => {

  new Sladio({})

  return (
    <main className="main content" id="page-wrap">
      Sladio
    </main>
  );
};

export default Home;
