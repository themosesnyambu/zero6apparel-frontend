import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import LandingPage from "./components/views/LandingPage/LandingPage";
import NotFound from "./components/views/notfound/NotFound";
import store from "./redux/store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
