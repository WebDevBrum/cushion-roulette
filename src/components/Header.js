/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const { button1, button2 } = props.config;
  return (
    <div className="header">
      <h5>THIS IS THE HEADER</h5>
      <Link to={`/${button1}`}>
        <button type="button">{button1}</button>
      </Link>
      <Link to={`/${button2}`}>
        <button type="button">{button2}</button>
      </Link>
    </div>
  );
}

export default Header;
