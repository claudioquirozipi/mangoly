import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import UmaComponents from "../view/uma";
import Home from "../view/home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/uma" component={UmaComponents} />
      </Switch>
    </Router>
  );
}
export default Routes;
