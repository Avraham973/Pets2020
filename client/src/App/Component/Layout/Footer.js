/** @format */
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// Component
import ContactUs from "../SharedComponent/ContactUs";
import { Button } from "@material-ui/core";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      Tal Avraham {new Date().getFullYear()}
    </React.Fragment>
  );
}
const theme = createMuiTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});

const useStyles = makeStyles((theme) => ({
  direction: "rtl",
  root: {
    backgroundColor: "#C8E6C9",
    direction: "rtl",
    display: "flex",
  },
  container: {
    direction: "rtl",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#2c3e50",
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.light,
    },
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container className={classes.root}>
        <Grid item md={4} sm={12} className={classes.icons}>
          <a
            target='_blank'
            href='https://www.facebook.com/kishkashta.dog.training'>
            <FacebookIcon fontSize='large' />
          </a>
          <a
            target='_blank'
            href='https://www.instagram.com/kishkashta.dog.training/'>
            <InstagramIcon fontSize='large' titleAccess='instegram' />
          </a>
          <br />
          <Copyright />
        </Grid>
        <Grid item md={4} sm={12}>
          middle
        </Grid>
        <Grid item md={4} sm={12}>
          <Grid item md={10} sm={6}>
            <ContactUs />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
