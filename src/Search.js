/* eslint-disable react/prop-types */
import React from "react";

import Header from "./components/Header";
import SearchTitles from "./components/SearchTitles";
import Selections from "./components/Selections";
import Footer from "./components/Footer";

// STATE SHOULD CLEAR ON RENDER HERE

function Search(props) {
  const { onClick, selections, clear, addHistory } = props;

  return (
    <div className="search-div">
      <Header config={{ button1: "login", button2: "user" }} />
      <Selections selections={selections} buttonRqd addHistory={addHistory} />
      <SearchTitles onClick={onClick} selections={selections.length} />
      <Footer clear={clear} buttonText="CLEAR SELECTIONS" />
    </div>
  );
}

export default Search;
