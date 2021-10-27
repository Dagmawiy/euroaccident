import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Auth from './pages/auth';
import Customer from './pages/customer';
import Notfound from './pages/errorPage';
import PrivateRoute from './reducer/privetRoute';
function App() {
  return (
    <Router>
      <>
        <Switch>          
         
          <PrivateRoute  path="/insurances" component={Customer} />
          <Route exact path="/" component={Auth} />
          <Route path="/404" component={Notfound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </>
    </Router>
  );
}

export default App;
