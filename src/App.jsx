import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import LandingPage from "./components/views/LandingPage/LandingPage";
import NotFound from "./components/views/notfound/NotFound";
import ReleaseDetails from "./components/views/releaseDetails/releaseDetails";
import ContainerWrapper from "./components/common/hoc/ContainerWrapper";
import CollectionContainer from "./components/common/hoc/collectionContainer";
import Bag from "./components/views/bag/bag";
import store from "./redux/store";
import SignUp from "./components/views/auth/signup/signUp";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <ContainerWrapper
          exact
          path="/releases/:id"
          component={ReleaseDetails}
        />
        <ContainerWrapper exact path="/" component={LandingPage} />
        <ContainerWrapper exact path="/bag" component={Bag} />
        <ContainerWrapper
          exact
          path="/collections"
          component={CollectionContainer}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
