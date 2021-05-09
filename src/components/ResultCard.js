/* eslint-disable react/prop-types */
import React from "react";

function ResultCard({ title, onClick, selectionsAmount }) {
  console.log(selectionsAmount);
  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${title.poster_path}`}
        alt={`${title.title} poster`}
      />
      <div className="card--content">
        <h3 className="card--title">
          {title.title ? title.title : title.name}
        </h3>
        {/* <p>
          <small>RELEASE DATE: {title.release_date}</small>
        </p>
        <p>
          <small>RATING: {title.vote_average}</small>
        </p> */}
        <p className="card--desc">{title.overview}</p>
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
