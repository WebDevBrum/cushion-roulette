import React from "react";
import Header from "./components/Header";

function Login() {
  return (
    <>
      <Header config={{ button1: "search", button2: "user" }} />
      <h1>THIS IS THE LOGIN PAGE</h1>
    </>
  );
}

export default Login;
