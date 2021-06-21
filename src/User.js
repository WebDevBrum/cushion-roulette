/* eslint-disable react/prop-types */
import React from "react";
import Header from "./components/Header";
import HistoryCard from "./components/HistoryCard";

function User({ selections, history, setFromHistory }) {
  console.log(history);
  return (
    <>
      <Header config={{ button1: "search" }} />
      <h1>THIS IS THE USER PROFILE PAGE</h1>
      <HistoryCard
        selections={selections}
        history={history}
        setFromHistory={setFromHistory}
      />
    </>
  );
}

export default User;
