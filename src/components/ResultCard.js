import React from "react";
import PropTypes from "prop-types";

function ResultCard({ title, onClick, selectionsAmount }) {
  // limits the length of a string, used here to limit title descriptions
  const limitedString = (string, limit) => `${string.substring(0, limit)}...`;

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

ResultCard.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  selectionsAmount: PropTypes.number,
};

export default ResultCard;
