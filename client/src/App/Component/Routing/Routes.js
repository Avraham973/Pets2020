/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
// import Login from "../Auth/Login2";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Home from "../HomePage/Home2";
import Leads from "../Leads/leads";
import TrainingService from "../TrainingService/TrainingService";
import SandBox from "../SandBox/sandbox";

const Routes = (props) => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/' component={Home} />
        <Route exa path='/trainingservice' component={TrainingService} />
        <Route exa path='/login' component={Login} />
        <Route exa path='/leads' component={Leads} />
        <Route exa path='/sandbox' component={SandBox} />
      </Switch>
    </section>
  );
};

export default Routes;
