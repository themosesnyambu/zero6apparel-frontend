import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import NotFound from "./components/views/notfound/NotFound";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
