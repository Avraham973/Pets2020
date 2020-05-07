/** @format */

import React, { Fragment } from "react";
import liran from "../../../App/Assets/Img/liran.jpg";
import { Avatar, Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {},
  },
  paper: {
    flexGrow: 1,
    direction: "rtl",
    padding: "2%",
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    // margin: "1%",
    width: theme.spacing(50),
    ["@media (max-width:700px)"]: {
      width: "250px",
      height: "250px",
    },
    height: theme.spacing(50),
    margin: "auto",
    display: "block",
  },
  title: {
    fontFamily: "Calibri",
    textAlign: "left",
  },
  text: {
    fontFamily: "Calibri",
    textAlign: "justify",
    paddingRight: "20%",
    textAlignLast: "left",
  },
}));

export const AboutMe = (props) => {
  const { aboutMe } = props;
  const classes = useStyles();
  //console.log(aboutMe);

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item style={{ paddingLeft: "6%" }}>
            <Avatar src={liran} className={classes.avatar} />
          </Grid>
          <Grid item xs={3} sm container>
            <Grid item xs={12} container direction='column' spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom variant='h3'>
                  לירן בן צבי - מאלף כלבים
                </Typography>
                <br />
                <Typography
                  className={classes.text}
                  variant='body1'
                  gutterBottom>
                  {aboutMe}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};
