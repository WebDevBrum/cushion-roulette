/* eslint-disable react/jsx-props-no-spreading */
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useState } from "react";
import Roulette from "./Roulette";
import Search from "./Search";
import User from "./User";
import Login from "./Login";

function App() {
  const [selections, addSelection] = useState([]);
  // const [history, addToHistory] = useState([]);

  const onClick = (input) => {
    addSelection((arr) => [...arr, input]);
    console.log(selections);
    window.scrollTo(0, 0);
  };

  const clearState = () => {
    addSelection([]);
  };

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
          <Route
            exact
            path="/user"
            render={(props) => <User {...props} selections={selections} />}
          />
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
