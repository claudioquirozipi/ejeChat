import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Views
import Home from "../view/home";
import About from "../view/about";
import Contact from "../view/contact";

export interface MyRouterProps {}

const MyRouter: React.SFC<MyRouterProps> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default MyRouter;
