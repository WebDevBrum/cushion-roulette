/* eslint-disable react/prop-types */
import React from "react";

import Header from "./components/Header";
import SearchTitles from "./components/SearchTitles";
import Selections from "./components/Selections";

// STATE SHOULD CLEAR ON RENDER HERE

function Search(props) {
  const { onClick } = props;

  return (
    <div className="search-div">
      <Header config={{ button1: "login", button2: "user" }} />
      <Selections />
      <SearchTitles onClick={onClick} />
    </div>
  );
}

export default Search;
