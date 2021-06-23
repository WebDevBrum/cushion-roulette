/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Wheel from "./components/Wheel.js";
import Header from "./components/Header";
import Selections from "./components/Selections.js";
import Footer from "./components/Footer.js";

function Roulette(props) {
  const { selections, clear } = props;

  return (
    <>
      <Header config={{ button1: "user" }} clear={clear} />
      <Wheel selections={selections} />
      <Selections selections={selections} buttonRqd={false} />
      <Link to="/search">
        <Footer clear={clear} buttonText="NEW WHEEL" />
      </Link>
    </>
  );
}

export default Roulette;
