import React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import SearchTitles from "./components/SearchTitles";
import Selections from "./components/Selections";
import Footer from "./components/Footer";
// Renders the search page

function Search(props) {
  const { onClick, selections, clear, addHistory } = props;

  return (
    <div className="search-div">
      <Header config={{ button1: null, button2: "user" }} clear={clear} />
      <Selections selections={selections} buttonRqd addHistory={addHistory} />
      <SearchTitles onClick={onClick} selections={selections.length} />
      <Footer clear={clear} buttonText="CLEAR SELECTIONS" />
    </div>
  );
}

Search.propTypes = {
  onClick: PropTypes.func,
  selections: PropTypes.object,
  clear: PropTypes.func,
  addHistory: PropTypes.func,
};

export default Search;
