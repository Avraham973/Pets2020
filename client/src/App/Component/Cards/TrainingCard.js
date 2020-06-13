/** @format */

import React, { Component } from "react";
import logo from "../../Assets/Img/top1.jpg";
// import pic from "../../Assets/Img/logoA.png";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Button,
  withStyles,
  Avatar,
} from "@material-ui/core";

const useStyles = (theme) => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    display: "flex",
    margin: 5,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    borderRadius: 4,
  },

  title: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    textAlign: "center",
  },
  avatar: {
    // margin: "1%",
    width: theme.spacing(20),
    ["@media (max-width:700px)"]: {
      width: "150px",
      height: "150px",
    },
    height: theme.spacing(20),
    margin: "auto",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    textAlign: "justify",
  },

  cardText: {
    flex: "1 0 auto",
    marginBottom: 15,
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0,
    },
  },
  //   button: {
  //     alignItems: "center",
  //     alignself: "center",
  //   },

  linkAction: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
});

function TrainingCard(props) {
  const { classes } = props;
  const { title, text, src } = props.trainingItem;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div className={classes.cardText}>
          <Avatar src={src} className={classes.avatar} />

          {/* <img className='round-img' src={src} alt='תמונה ' /> */}

          <Typography variant='h6' className={classes.title} gutterBottom>
            {title}
          </Typography>
          <Typography variant='body1'>{text}</Typography>
        </div>
        <CardActions style={{ padding: 0 }}>
          <Button className={classes.button} variant='contained'>
            קרא עוד...
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
TrainingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles)(TrainingCard);
