import React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import HistoryCard from "./components/HistoryCard";
import Footer from "./components/Footer";

function User({ selections, history, setFromHistory, clearState, clear }) {
  console.log(history);
  return (
    <>
      <Header config={{ button1: "search" }} clear={clearState} />
      <h2 className="welcome">Recent Wheels:</h2>
      <HistoryCard
        selections={selections}
        history={history}
        setFromHistory={setFromHistory}
      />
      <Footer clear={clear} buttonText="CLEAR HISTORY" />
    </>
  );
}

User.propTypes = {
  selections: PropTypes.object,
  history: PropTypes.object,
  setFromHistory: PropTypes.func,
  clearState: PropTypes.func,
  clear: PropTypes.func,
};

export default User;
