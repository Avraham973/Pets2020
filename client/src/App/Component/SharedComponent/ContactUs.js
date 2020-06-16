/** @format */

import React, { useState, Fragment } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../Action/leads";
import { Redirect, Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import {
  Container,
  Typography,
  CssBaseline,
  makeStyles,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  Avatar,
} from "@material-ui/core";
import Logo from "../../Assets/Img/logoA.png";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  paper: {
    margin: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    backgroundColor: "#34495e",
    "&:hover": {
      backgroundColor: "#2980b9",
    },
    margin: theme.spacing(3, 0, 2),
  },
}));

const ContactUs = ({ addLead }) => {
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    addLead(fName, phone, email);
  };

  ValidatorForm.addValidationRule("isPhoneNO", (value) => {
    if (value.match(/\d/g) && value.length === 10) {
      console.log(value.match(/\d/g));
      return true;
    }
    return false;
  });

  const classes = useStyles();
  const [formData, setFormData] = useState({
    fName: "",
    phone: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { fName, phone, email } = formData;

  return (
    // <Container component='main' maxWidth='xs'>
    <Fragment>
      <CssBaseline />
      <Typography component='h1' variant='h5'>
        <Avatar src={Logo}>
          <LockOutlinedIcon />
        </Avatar>
        ?רוצה שנחזור אליך
      </Typography>
      <ValidatorForm
        className={classes.form}
        noValidate
        onSubmit={(e) => onSubmit(e)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextValidator
              onChange={(e) => onChange(e)}
              value={fName}
              variant='outlined'
              required
              fullWidth
              id='fName'
              label='שם מלא'
              name='fName'
              autoComplete='fullname'
              validators={["required", "minStringLength:2"]}
              errorMessages={["שדה חובה", "יש להכניס בין 2-25 תווים"]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextValidator
              onChange={(e) => onChange(e)}
              value={phone}
              variant='outlined'
              required
              fullWidth
              id='phone'
              label='טלפון'
              name='phone'
              autoComplete='phone'
              validators={["required", "isPhoneNO"]}
              errorMessages={["שדה חובה", "יש להכניס מספר בעל 10 ספרות"]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextValidator
              onChange={(e) => onChange(e)}
              value={email}
              variant='outlined'
              required
              fullWidth
              id='email'
              label='דואר אלקטרוני'
              name='email'
              autoComplete='email'
              validators={["required", "isEmail"]}
              errorMessages={["שדה חובה", 'יש להכניס כתובת דוא"ל תקינה']}
            />
          </Grid>
        </Grid>
        <Button
          disabled={isSubmitted}
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}>
          שלח
        </Button>
      </ValidatorForm>
    </Fragment>
    // </Container>
  );
};

ContactUs.propType = {
  addLead: PropTypes.func.isRequired,
};

export default connect(null, { addLead })(ContactUs);
