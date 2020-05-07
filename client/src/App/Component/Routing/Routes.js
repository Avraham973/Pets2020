/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Auth/Login2";
import Home from "../HomePage/Home2";

const Routes = (props) => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
      </Switch>
    </section>
  );
};

export default Routes;
