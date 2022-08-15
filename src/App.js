import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Pages.
import Game from './pages/Game';
import Contact from './pages/Contact';
import Rules from "./pages/Rules";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Game />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/rules">
          <Rules />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;