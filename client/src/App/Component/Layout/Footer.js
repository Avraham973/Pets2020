/** @format */
import React from "react";
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

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color='inherit' href='https://material-ui.com/'>
        Tal Avraham
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}
const theme = createMuiTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});

const useStyles = makeStyles((theme) => ({
  direction: "rtl",
  root: {
    backgroundColor: "#27ae60",
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
    backgroundColor: "#2c3e50",
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
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
    <ThemeProvider theme={theme}>
      <div dir='rtl'>
        <Typography component='footer' className={classes.root}>
          <Container className={classes.container}>
            <Grid container spacing={5}>
              <Grid item xs={6} sm={4} md={3}>
                <Grid
                  container
                  direction='column'
                  justify='flex-end'
                  className={classes.iconsWrapper}
                  spacing={2}>
                  <Grid item className={classes.icons}>
                    <a href='https://www.facebook.com/kishkashta.dog.training'>
                      <FacebookIcon fontSize='large' />
                    </a>
                    <a
                      href='https://twitter.com/MaterialUI'
                      className={classes.icon}>
                      <InstagramIcon />
                    </a>
                  </Grid>
                  <Grid item>
                    <Copyright />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} sm={4} md={2}></Grid>
              <Grid item xs={6} sm={8} md={4}></Grid>
            </Grid>
            <ContactUs />
          </Container>
        </Typography>
      </div>
    </ThemeProvider>
  );
}
