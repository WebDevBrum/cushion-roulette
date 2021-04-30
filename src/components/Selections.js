import React from "react";
import { Link } from "react-router-dom";
import tileImage from "../images/tileImage.jpeg";
// Remember image will eventually be imported from state so this blank needs to be moved to state
function Selections() {
  return (
    <div className="tile-grid">
      <div className="tiles-left">
        <img className="tileImage" src={tileImage} alt="empty tile" />
        <img className="tileImage" src={tileImage} alt="empty tile" />
        <img className="tileImage" src={tileImage} alt="empty tile" />
      </div>
      <div className="tiles-right">
        <img className="tileImage" src={tileImage} alt="empty tile" />
        <img className="tileImage" src={tileImage} alt="empty tile" />
        <img className="tileImage" src={tileImage} alt="empty tile" />
      </div>
      <div className="go-button">
        <Link to="/roulette">
          <button type="button">Lets go!</button>
        </Link>
      </div>
    </div>
  );
}

export default Selections;
