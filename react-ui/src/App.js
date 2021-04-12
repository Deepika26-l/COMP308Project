import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CreateVitalSigns from "./components/CreateVitalSigns";
import Alert from "./components/Alert";
import ListVitalSigns from "./components/ListVitalSigns";
import MotivationalTips from "./components/MotivationalTips";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route component={Home} path="/" exact={true} />
        <Route component={Signup} path="/signup" />
        <Route component={Login} path="/login" />
        <Route component={CreateVitalSigns} path="/" />
        <Route component={ListVitalSigns} path="/" />
        <Route component={Alert} path="/" />
        <Route component={MotivationalTips} path="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
