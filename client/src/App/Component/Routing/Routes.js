/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
// import Login from "../Auth/Login2";
import Register from "../Auth/Register";
import Home from "../HomePage/Home2";
import TrainingService from "../TrainingService/TrainingService";

const Routes = (props) => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/' component={Home} />
        <Route exa path='/trainingservice' component={TrainingService} />
      </Switch>
    </section>
  );
};

export default Routes;
