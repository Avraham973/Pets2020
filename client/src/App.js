/** @format */

import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";

import "./App.css";
import Routes from "../src/App/Component/Routing/Routes";
// Component
import Home from "./App/Component/HomePage/Home2";
// import Login from "./App/Component/Auth/Login2";
import Navbar from "../src/App/Component/Layout/Navbar";
import AppFooter from "./App/Component/Layout/Footer";
import { TrainingServiceForm } from "./App/Component/TrainingService/TrainingServiceForm";

//RTL
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

//Redux
import { Provider } from "react-redux";
import store from "./store";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function RTL(props) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}

const theme = createMuiTheme({
  direction: "rtl", // Both here and <body dir="rtl">
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

function App() {
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
            <div dir='rtl'>
              <Fragment>
                <Navbar stickyHeader={true} />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route component={Routes} />
                  {/* <Route exact path='/login' component={Login} /> */}
                  {/* <Route exact path='/form' component={TrainingServiceForm} /> */}
                </Switch>
              </Fragment>

              {/* <AppFooter /> */}
            </div>
          </RTL>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
