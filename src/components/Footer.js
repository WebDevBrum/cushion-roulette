/* eslint-disable react/prop-types */
import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-buttons">
        <button
          className="clear-button"
          type="button"
          onClick={() => props.clear()}
        >
          CLEAR SELECTIONS
        </button>
      </div>
    </div>
  );
}

export default Footer;
