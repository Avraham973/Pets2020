/** @format */

import React, { Fragment } from "react";
import liran from "../../../App/Assets/Img/liran.jpg";
import {
  Avatar,
  Paper,
  Grid,
  Typography,
  Box,
  Container,
} from "@material-ui/core";
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
  grid: {
    alignSelf: "center",
  },
  avatar: {
    // margin: "1%",
    width: theme.spacing(35),
    height: theme.spacing(35),
    // ["@media (max-width:700px)"]: {
    //   width: theme.spacing(20),
    //   height: theme.spacing(20),
    // },
  },
  title: {
    // fontFamily: "Arial,Helvetica,sans-serif",
    fontFamily: "serif",
    textAlign: "center",
  },
  text: {
    fontFamily: "serif",
    textAlign: "justify",
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
    <Container spacing={2}>
      <Grid container>
        <Grid item md={6} sm={12} className={classes.text}>
          <Typography className={classes.title} gutterBottom variant='h2'>
            לירן בן צבי
          </Typography>
          <Typography className={classes.title} gutterBottom variant='h4'>
            מאלף כלבים
          </Typography>
          {aboutMe}
        </Grid>
        <Grid item md={6} sm={12} display='flex' className={classes.grid}>
          <Avatar src={liran} className={classes.avatar} />
        </Grid>
      </Grid>
    </Container>
  );
};
