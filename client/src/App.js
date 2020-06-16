/** @format */

/** @format */

import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";
import { getVisibleAlert } from "./App/Reducers/alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SweetAlert from "react-bootstrap-sweetalert";
// import "./App.css";
import Routes from "../src/App/Component/Routing/Routes";
// Component
import Home from "./App/Component/HomePage/Home2";
// import Login from "./App/Component/Auth/Login2";
import Navbar from "../src/App/Component/Layout/Navbar";
//import Navbar from "../src/App/Component/Layout/nav2";
import Footer from "./App/Component/Layout/Footer";
import { TrainingServiceForm } from "./App/Component/TrainingService/TrainingServiceForm";

//RTL
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset, useTheme } from "@material-ui/core/styles";

//Redux
import { Provider } from "react-redux";
import store from "./store";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function RTL(props) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}

let theme = createMuiTheme({
  direction: "rtl",
});

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "ltr",
    display: "flex",
    "& > *": {
      margin: theme.spacing(3),
    },
  },
  direction: "rtl",
}));

const App = ({ visibleAlert }) => {
  const classes = useStyles();

  console.log(process.env.FACEBOOK_TOKEN);
  const [drawerState, setDrawerState] = useState(false);

  const onDrawerClicked = () => {
    setDrawerState(!drawerState);
  };

  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <RTL>
            <div dir='rtl' className='App'>
              <Fragment>
                <Navbar stickyHeader={true} />

                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route component={Routes} />
                  {/* <Route exact path='/login' component={Login} /> */}
                  {/* <Route exact path='/form' component={TrainingServiceForm} /> */}
                </Switch>
              </Fragment>
              {visibleAlert && (
                <SweetAlert {...visibleAlert}>
                  {visibleAlert.content}
                </SweetAlert>
              )}

              <Footer />
            </div>
          </RTL>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

App.propTypes = {
  visibleAlert: PropTypes.any,
};

const mapStateToProps = (state) => ({
  visibleAlert: getVisibleAlert(state.alert),
});

export default connect(mapStateToProps, {})(App);
