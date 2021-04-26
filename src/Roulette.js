import React from "react";
import { Link } from "react-router-dom";
import Wheel from "./components/Wheel.js";
import Header from "./components/Header";

function Roulette(props) {
  return (
    <>
      <Header config={{ button1: "user" }} />
      <h1>THIS IS THE Roulette PAGE</h1>
      <Wheel />
      <Link to="/search">
        <button type="button">New Wheel</button>
      </Link>
    </>
  );
}

export default Roulette;
