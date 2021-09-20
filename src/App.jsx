import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import LandingPage from "./components/views/LandingPage/LandingPage";
import NotFound from "./components/views/notfound/NotFound";
import ReleaseDetails from "./components/views/releaseDetails/releaseDetails";
import ContainerWrapper from "./components/common/hoc/ContainerWrapper";
import CollectionContainer from "./components/common/hoc/collectionContainer";
import Bag from "./components/views/bag/bag";
import {store, persistor} from "./redux/store";
import SignUp from "./components/views/auth/signup/signUp";
import SignIn from "./components/views/auth/signin/signIn";
import Information from "./components/views/checkout/information/Information";
import Profile from "./components/views/profile/profile";
// import setUser from '../utils/setUser';

// setUser();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <ContainerWrapper
            exact
            path="/releases/:id"
            component={ReleaseDetails}
          />
          <ContainerWrapper exact path="/" component={LandingPage} />
          <ContainerWrapper exact path="/bag" component={Bag} />
          <ContainerWrapper
            exact
            path="/checkout/information"
            component={Information}
          />
          <ContainerWrapper exact path="/profile/:userId" component={Profile} />
          <ContainerWrapper
            exact
            path="/collections"
            component={CollectionContainer}
          />
          <ContainerWrapper component={NotFound} />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
