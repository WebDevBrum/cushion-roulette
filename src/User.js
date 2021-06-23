/* eslint-disable react/prop-types */
import React from "react";
import Header from "./components/Header";
import HistoryCard from "./components/HistoryCard";
import Footer from "./components/Footer";

function User({ selections, history, setFromHistory, clear }) {
  console.log(history);
  return (
    <>
      <Header config={{ button1: "search" }} />
      <h1>Recent Wheels:</h1>
      <HistoryCard
        selections={selections}
        history={history}
        setFromHistory={setFromHistory}
      />
      <Footer clear={clear} buttonText="CLEAR HISTORY" />
    </>
  );
}

export default User;
