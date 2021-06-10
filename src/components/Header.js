/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

import { IoMdUnlock as Lock } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

function Header(props) {
  const { button1, button2 } = props.config;

  return (
    <div className="header">
      <h1 className="app-title">CUSHION ROULETTE</h1>
      <div className="header-buttons">
        <Link to={`/${button1}`}>
          <button
            aria-label="redirect buttons"
            className="header-button"
            type="button"
          >
            {button1 === "login" && <Lock />}
            {button1 === "search" && <BsSearch />}
            {button1 === "user" && <FaUserAlt />}
          </button>
        </Link>
        <Link to={`/${button2}`}>
          <button
            className="header-button"
            type="button"
            aria-label="redirect buttons"
          >
            {button2 === "login" && <Lock />}
            {button2 === "search" && <BsSearch />}
            {button2 === "user" && <FaUserAlt />}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
