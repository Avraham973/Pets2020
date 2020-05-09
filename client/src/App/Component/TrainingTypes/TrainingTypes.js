/** @format */

import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getTrainingTypes } from "../../Action/trainingTypes";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import pic from "../../Assets/Img/top1.jpg";
import {
  Paper,
  Grid,
  Container,
  Avatar,
  Typography,
  Button,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "1%",
  },
  paper: {
    textAlign: "center",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
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
    display: "block",
  },
  button: {
    display: "flex",
    margin: "0 auto",
    backgroundColor: "#27ae60",
    "&:hover": {
      backgroundColor: "#e67e22",
    },
  },
}));

const TrainingTypes = ({ getTrainingTypes, trainings }) => {
  const classes = useStyles();
  const imgg = "../../Assets/Img/top1.jpg";
  useEffect(() => {
    getTrainingTypes();
  }, []);
  //console.log("data", trainings.trainingTypes);

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        {trainings.map((item) => (
          <Fragment>
            <Grid xs item={true} key={item._id}>
              <Paper elevation={0} className={classes.paper}>
                <Avatar src={imgg} className={classes.avatar} />
                <Typography align='center' variant='h4'>
                  {item.title}
                  {item.key}
                </Typography>
                <Typography variant='body1' align='center' gutterBottom>
                  {item.text}
                </Typography>
                <Button
                  className={classes.button}
                  variant='contained'
                  color='secondary'>
                  קרא עוד...
                </Button>
              </Paper>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Container>
  );
};

TrainingTypes.propTypes = {
  getTrainingTypes: PropTypes.func.isRequired,
  trainings: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state.trainingTypes.trainingTypes);
  return {
    trainings: state.trainingTypes.trainingTypes,
  };
};

export default connect(mapStateToProps, { getTrainingTypes })(TrainingTypes);
