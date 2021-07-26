/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { HiEye } from "react-icons/hi";
import PropTypes from "prop-types";
import ResultCard from "./ResultCard.js";

function SearchTitles(props) {
  const { onClick, selections } = props;
  // Search query state
  const [query, setQuery] = useState("");
  // Create and update the state for matched movie/tv titles
  const [titles, setTitles] = useState([]);

  const searchTitles = async (e) => {
    e.preventDefault();

    // Movie Db API 'multi' search which searches both tv and movies.
    // COMMENT TO SELF 'REMOVE PERSONAL API KEY IF MAKING REPOSITORY PUBLIC
    const url = `https://api.themoviedb.org/3/search/multi?api_key=b26729c76fde69b62e58c6652da0d9be&language=en-US&query=${query}&page=1&include_adult=false`;

    // Basic Error handling for search / fetch failure
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTitles(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  // Render of search input along with card component
  return (
    <>
      <form className="form" onSubmit={searchTitles}>
        <div className="search-bar" role="search">
          <input
            required
            aria-label="search"
            className="input"
            type="text"
            name="query"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={(e) => (e.target.value = "")}
          />
          <button
            aria-label="search-button"
            className="search-button"
            type="submit"
          >
            <HiEye />
          </button>
        </div>
        {!titles[0] && (
          <div className="welcome">
            <h2>Welcome to Cushion Roulette</h2>
            <p>Can't choose what to watch?</p>
            <p>Then select some titles to begin!</p>
          </div>
        )}
      </form>
      <div className="card-list">
        {titles
          .filter((title) => title.poster_path)
          .map((title) => (
            <ResultCard
              title={title}
              key={title.id}
              onClick={onClick}
              selectionsAmount={selections}
            />
          ))}
      </div>
    </>
  );
}

SearchTitles.propTypes = {
  onClick: PropTypes.func,
  selections: PropTypes.object,
};

export default SearchTitles;
