/* eslint-disable react/prop-types */
import React from "react";
import Header from "./components/Header";
import HistoryCard from "./components/HistoryCard";

function User({ selections, history }) {
  console.log(history);
  return (
    <>
      <Header config={{ button1: "search" }} />
      <h1>THIS IS THE USER PROFILE PAGE</h1>
      <HistoryCard selections={selections} history={history} />
    </>
  );
}

export default User;
