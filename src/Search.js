import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import SearchTitles from "./components/SearchTitles";

// STATE SHOULD CLEAR ON RENDER HERE

function Search(props) {
  return (
    <>
      <Header config={{ button1: "login", button2: "user" }} />
      <h1>THIS IS THE SEARCH PAGE</h1>
      <Link to="/roulette">
        <button type="button">Lets go!</button>
      </Link>
      <SearchTitles />
    </>
  );
}

export default Search;
