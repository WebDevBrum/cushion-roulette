/* eslint-disable react/destructuring-assignment */

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import tileImage from "../images/tileImage.jpeg";

function Selections(props) {
  const { selections, buttonRqd, addHistory } = props;
  const url = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

  return (
    <div className={buttonRqd ? "tile-grid" : "wheel-tile-grid"}>
      <div className={buttonRqd ? "tiles-left" : "wheel-tiles-left"}>
        <img
          className="tileImage"
          src={selections[0] ? url + selections[0].poster_path : tileImage}
          alt={selections[0] ? selections[0].title : "empty tile"}
        />
        <img
          className="tileImage"
          src={selections[1] ? url + selections[1].poster_path : tileImage}
          alt={selections[1] ? selections[1].title : "empty tile"}
        />
        <img
          className="tileImage"
          src={selections[2] ? url + selections[2].poster_path : tileImage}
          alt={selections[2] ? selections[2].title : "empty tile"}
        />
      </div>
      <div className={buttonRqd ? "tiles-right" : "wheel-tiles-right"}>
        <img
          className="tileImage"
          src={selections[3] ? url + selections[3].poster_path : tileImage}
          alt={selections[3] ? selections[3].title : "empty tile"}
        />
        <img
          className="tileImage"
          src={selections[4] ? url + selections[4].poster_path : tileImage}
          alt={selections[4] ? selections[4].title : "empty tile"}
        />
        <img
          className="tileImage"
          src={selections[5] ? url + selections[5].poster_path : tileImage}
          alt={selections[5] ? selections[5].title : "empty tile"}
        />
      </div>
      {buttonRqd ? (
        <div className="go-button">
          <Link to="/roulette">
            <button
              className={
                selections[0] ? "go-button-button" : "go-button-disabled"
              }
              type="button"
              onClick={addHistory}
              disabled={!selections[0]}
            >
              {selections[0] ? "READY" : ""}
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

Selections.propTypes = {
  selections: PropTypes.object,
  buttonRqd: PropTypes.bool,
  addHistory: PropTypes.func,
};

export default Selections;
