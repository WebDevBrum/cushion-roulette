/* eslint-disable react/prop-types */
import React from "react";

function Footer(props) {
  const { clear, buttonText } = props;
  return (
    <div className="footer">
      <div className="footer-buttons">
        <button className="clear-button" type="button" onClick={() => clear()}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Footer;
