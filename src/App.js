/* eslint-disable react/jsx-props-no-spreading */
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import React, { useEffect, useState } from "react";
import Roulette from "./Roulette";
import Search from "./Search";
import User from "./User";
import Login from "./Login";

function App() {
  const [selections, addSelection] = useState([]);

  const [history, addToHistory] = useState(() => {
    const persistedValue = window.localStorage.getItem("history");
    return persistedValue !== null ? JSON.parse(persistedValue) : "";
  });

  const onClick = (input) => {
    addSelection((arr) => [...arr, input]);
    console.log(selections);
    window.scrollTo(0, 0);
  };

  const addHistory = () => {
    console.log("add to history");
    const dateAdded = new Date();
    // adds date to selections object
    selections[0].historyDate = dateAdded;
    addToHistory((arr) => [selections, ...arr]);
  };

  const clearState = () => {
    console.log("state cleared");
    addSelection([]);
  };

  const setFromHistory = (data) => {
    console.log(data);
    clearState();
    data.forEach((item) => {
      addSelection((arr) => [...arr, item]);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  function clearStorage() {
    console.log("clearing storage");
    addToHistory([]);
    localStorage.clear();
  }

  return (
    <Router>
      <div>
        <Switch>
          <Redirect exact from="/" to="search" />
          <Route
            exact
            path="/search"
            render={(props) => (
              <Search
                {...props}
                onClick={onClick}
                selections={selections}
                clear={clearState}
                addHistory={addHistory}
              />
            )}
          />
          <Route
            exact
            path="/user"
            render={(props) => (
              <User
                {...props}
                selections={selections}
                history={history}
                setFromHistory={setFromHistory}
                clear={clearStorage}
                clearState={clearState}
              />
            )}
          />
          {selections[0] ? (
            <Route
              exact
              path="/roulette"
              render={(props) => (
                <Roulette
                  {...props}
                  onClick={onClick}
                  selections={selections}
                  clear={clearState}
                />
              )}
            />
          ) : (
            <Redirect to="/" />
          )}

          <Route exact path="/login" component={Login} />
          {/* <PrivateToute /> */}
          {/* <Route unhandled error />
          <Route forbidden /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
