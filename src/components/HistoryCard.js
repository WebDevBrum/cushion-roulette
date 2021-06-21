/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function HistoryCard({ selections, history, setFromHistory }) {
  console.log(selections);

  // limits the length of a string, used here to limit title descriptions
  // const limitedString = (string, limit) => `${string.substring(0, limit)}...`;

  return history.map((historyItem, historyIndex) => (
    <div className="card" key={historyIndex}>
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${historyItem[0].poster_path}`}
        alt={`${history[0].title} poster`}
      />
      <div className="card--content">
        {/* NEED TO ADD A FOR EACH HERE */}
        {historyItem.map((selection, index) => (
          <h3 key={index}>
            {selection.title ? selection.title : selection.name}
          </h3>
        ))}
        {/* <p>
          <small>RELEASE DATE: {title.release_date}</small>
        </p>
        <p>
          <small>RATING: {title.vote_average}</small>
        </p> */}
      </div>
      <Link to="/roulette">
        <button type="button" onClick={() => setFromHistory(historyItem)}>
          Test
        </button>
      </Link>
      {/* <button
        className={
          selectionsAmount < 6 ? "title-button" : "title-button-disabled"
        }
        type="button"
        onClick={() => onClick(title)}
        disabled={selectionsAmount === 6}
      >
        ADD
      </button> */}
    </div>
  ));
}

export default HistoryCard;
