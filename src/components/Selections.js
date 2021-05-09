/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import tileImage from "../images/tileImage.jpeg";
// Remember image will eventually be imported from state so this blank needs to be moved to state
function Selections(props) {
  const { selections } = props;
  const url = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";
  // selections[0].poster_path
  return (
    <div className="tile-grid">
      <div className="tiles-left">
        <img
          className="tileImage"
          src={selections[0] ? url + selections[0].poster_path : tileImage}
          alt="empty tile"
        />
        <img
          className="tileImage"
          src={selections[1] ? url + selections[1].poster_path : tileImage}
          alt="empty tile"
        />
        <img
          className="tileImage"
          src={selections[2] ? url + selections[2].poster_path : tileImage}
          alt="empty tile"
        />
      </div>
      <div className="tiles-right">
        <img
          className="tileImage"
          src={selections[3] ? url + selections[3].poster_path : tileImage}
          alt="empty tile"
        />
        <img
          className="tileImage"
          src={selections[4] ? url + selections[4].poster_path : tileImage}
          alt="empty tile"
        />
        <img
          className="tileImage"
          src={selections[5] ? url + selections[5].poster_path : tileImage}
          alt="empty tile"
        />
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
