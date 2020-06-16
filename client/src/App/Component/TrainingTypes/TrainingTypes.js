/** @format */

import React, { Fragment, useState, useEffect } from "react";
import TrainingCard from "../Cards/TrainingCard";
import { Link } from "react-router-dom";
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
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "1%",
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  avatar: {
    // margin: "1%",
    width: theme.spacing(15),
    ["@media (max-width:700px)"]: {
      width: "100px",
      height: "100px",
    },
    height: theme.spacing(15),
    margin: "auto",
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
    <Grid
      container
      // style={{ maxWidth: 1410, margin: "auto" }}
      alignItems='stretch'>
      {trainings.map((trainingItem) => (
        <Grid
          key={trainingItem._id}
          item
          md={3}
          sm={12}
          style={{ display: "flex" }}>
          <TrainingCard trainingItem={trainingItem} />
        </Grid>
      ))}
    </Grid>
  );
};

TrainingTypes.propTypes = {
  getTrainingTypes: PropTypes.func.isRequired,
  trainings: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  //console.log("mapStateToProps", state.trainingTypes.trainingTypes);
  return {
    trainings: state.trainingTypes.trainingTypes,
  };
};

export default connect(mapStateToProps, { getTrainingTypes })(TrainingTypes);
