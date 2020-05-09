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
    // fontFamily: "Arial,Helvetica,sans-serif",
    fontFamily: "serif",
    textAlign: "center",
  },
  text: {
    fontFamily: "serif",
    textAlign: "justify",
    paddingRight: "25%",
    paddingLeft: "25%",
    textAlignLast: "left",
  },
  hr: {
    display: "block",
    borderTop: "3px double #8c8b8b",
    width: "50%",
    marginBefore: "0.5em",
    marginAfter: "0.5em",
    marginStart: "auto",
    marginEnd: "auto",
    overflow: "hidden",
    borderWidth: "3px",
  },
}));

export const AboutMe = (props) => {
  const { aboutMe } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item style={{ paddingLeft: "10%" }}>
            <Avatar src={liran} className={classes.avatar} />
          </Grid>
          <Grid item xs={3} sm container>
            <Grid item xs={12} container direction='column' spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom variant='h2'>
                  לירן בן צבי
                </Typography>
                <Typography className={classes.title} gutterBottom variant='h4'>
                  מאלף כלבים
                </Typography>
                <hr className={classes.hr} />
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
