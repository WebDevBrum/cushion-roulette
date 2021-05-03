import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import SearchTitles from "./components/SearchTitles";
import Selections from "./components/Selections";

// STATE SHOULD CLEAR ON RENDER HERE

function Search(props) {
  return (
    <div className="search-div">
      <Header config={{ button1: "login", button2: "user" }} />
      <h1>THIS IS THE SEARCH PAGE</h1>
      <Selections />
      <SearchTitles />
    </div>
  );
}

export default Search;
