import React from "react";
import PropTypes from "prop-types";
import apiLogo from "../images/tmdb.png";

function Footer(props) {
  const { clear, buttonText } = props;
  return (
    <div className="footer">
      <img className="api-logo" src={apiLogo} alt="api logo" />
      <p className="api-attribution">
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </p>
      <div className="footer-buttons">
        <button className="clear-button" type="button" onClick={() => clear()}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

Footer.propTypes = {
  clear: PropTypes.func,
  buttonText: PropTypes.string,
};

export default Footer;
