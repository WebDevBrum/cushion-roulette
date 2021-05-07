import React from "react";
import Header from "./components/Header";

function User() {
  return (
    <>
      <Header config={{ button1: "search" }} />
      <h1>THIS IS THE USER PROFILE PAGE</h1>
    </>
  );
}

export default User;
