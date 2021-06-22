/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

function HistoryCard({ selections, history, setFromHistory }) {
  console.log(selections);
  moment.locale("en-gb");

  // limits the length of a string, used here to limit title descriptions
  // const limitedString = (string, limit) => `${string.substring(0, limit)}...`;

  return history.map((historyItem, historyIndex) => (
    <div className="history-card-list">
      <div className="card" key={historyIndex}>
        <div>
          <img
            className="card--image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${historyItem[0].poster_path}`}
            alt={`${history[0].title} poster`}
          />
          <p className="date">Added:</p>
          <p className="date">
            {moment(historyItem[0].historyDate).format("DD-MM-YYYY")}
          </p>
        </div>
        <div className="card--content">
          {historyItem.map((selection, index) => (
            <p className="history--card--desc" key={index}>
              {index + 1}) {selection.title ? selection.title : selection.name}
            </p>
          ))}
        </div>
        <div className="history-button">
          <Link to="/roulette" className="history-button">
            <button
              className="title-button"
              type="button"
              onClick={() => setFromHistory(historyItem)}
            >
              SPIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  ));
}

export default HistoryCard;
