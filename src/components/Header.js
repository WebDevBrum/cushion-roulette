/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Link } from "react-router-dom";
import { IoMdUnlock as Lock } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import PropTypes from "prop-types";

function Header(props) {
  const { button1, button2 } = props.config;
  const { clear } = props;

  return (
    <div className="header">
      <h1 className="app-title">CUSHION ROULETTE</h1>
      <div className="header-buttons">
        <Link to={`/${button1}`} onClick={() => clear()}>
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
        <Link to={`/${button2}`} onClick={() => clear()}>
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

Header.propTypes = {
  button1: PropTypes.string,
  button2: PropTypes.string,
  clear: PropTypes.func,
  config: PropTypes.string,
};

export default Header;
