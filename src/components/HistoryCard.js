/* eslint-disable react/prop-types */
import React from "react";

function HistoryCard({ selections }) {
  console.log(selection);

  // limits the length of a string, used here to limit title descriptions
  const limitedString = (string, limit) => `${string.substring(0, limit)}...`;

  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${selections[0].poster_path}`}
        alt={`${selections[0].title} poster`}
      />
      <div className="card--content">
        {/* NEED TO ADD A FOR EACH HERE */}
        <h3>
          {selections[0].title ? selections[0].title : selections[0].name}
        </h3>
        <h3>
          {selections[1].title ? selections[1].title : selections[1].name}
        </h3>
        <h3>
          {selections[2].title ? selections[2].title : selections[2].name}
        </h3>
        <h3>
          {selections[3].title ? selections[3].title : selections[3].name}
        </h3>
        <h3>
          {selections[4].title ? selections[4].title : selections[4].name}
        </h3>
        <h3>
          {selections[5].title ? selections[5].title : selections[5].name}
        </h3>

        {/* <p>
          <small>RELEASE DATE: {title.release_date}</small>
        </p>
        <p>
          <small>RATING: {title.vote_average}</small>
        </p> */}
        <p className="card--desc">{limitedString(title.overview, 170)}</p>
        <p className="card--details">
          RELEASE DATE: {title.release_date}
          <br />
          RATING: {title.vote_average}
        </p>
      </div>
      <button
        className={
          selectionsAmount < 6 ? "title-button" : "title-button-disabled"
        }
        type="button"
        onClick={() => onClick(title)}
        disabled={selectionsAmount === 6}
      >
        ADD
      </button>
    </div>
  );
}

export default ResultCard;
