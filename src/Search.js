/* eslint-disable react/prop-types */
import React from "react";

import Header from "./components/Header";
import SearchTitles from "./components/SearchTitles";
import Selections from "./components/Selections";

// STATE SHOULD CLEAR ON RENDER HERE

function Search(props) {
  const { onClick, selections } = props;

  return (
    <div className="search-div">
      <Header config={{ button1: "login", button2: "user" }} />
      <Selections selections={selections} />
      <SearchTitles onClick={onClick} selections={selections.length} />
    </div>
  );
}

export default Search;
