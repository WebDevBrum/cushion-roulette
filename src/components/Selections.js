import React from "react";
import tileImage from "../images/tileImage.jpeg";

// Remember image will eventually be imported from state so this blank needs to be moved to state
function Selections() {
  return (
    <div className="tile-grid">
      <div className="tiles-left">
        <img className="tileImage" src={tileImage} alt="empty tile" />;
        <img className="tileImage" src={tileImage} alt="empty tile" />;
        <img className="tileImage" src={tileImage} alt="empty tile" />;
      </div>
      <div className="tiles-right">
        <img className="tileImage" src={tileImage} alt="empty tile" />;
        <img className="tileImage" src={tileImage} alt="empty tile" />;
        <img className="tileImage" src={tileImage} alt="empty tile" />;
      </div>
    </div>
  );
}

export default Selections;
