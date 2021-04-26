import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Roulette from "./Roulette";
import Search from "./Search";
import User from "./User";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Redirect exact from="/" to="search" />
          <Route exact path="/search" component={Search} />
          <Route exact path="/roulette" component={Roulette} />
          <Route exact path="/user" component={User} />
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
