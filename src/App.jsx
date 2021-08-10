import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import LandingPage from "./components/views/LandingPage/LandingPage";
import NotFound from "./components/views/notfound/NotFound";
import ReleaseDetails from "./components/views/releaseDetails/releaseDetails";
import ContainerWrapper from "./components/common/hoc/ContainerWrapper";
import store from "./redux/store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <ContainerWrapper
          exact
          path="/releases/:id"
          component={ReleaseDetails}
        />
        <ContainerWrapper exact path="/" component={LandingPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
