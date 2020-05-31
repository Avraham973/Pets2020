/** @format */

import React, { useState, useReducer } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import background from "../../Assets/Img/signupback.png";
import { register } from "../../Action/auth";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: background,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#34495e",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    backgroundColor: "#34495e",
    "&:hover": {
      backgroundColor: "#2980b9",
    },
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = ({ register, showAlert }) => {
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    register({ firstname, lastname, email, phone, password });
  };

  const classes = useStyles();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  const { firstname, lastname, email, phone, password } = formData;

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          הרשמה לכשכשתא אילוף כלבים
        </Typography>
        <ValidatorForm
          className={classes.form}
          noValidate
          onSubmit={(e) => onSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextValidator
                onChange={(e) => onChange(e)}
                autoComplete='firstname'
                value={firstname}
                name='firstname'
                variant='outlined'
                required
                fullWidth
                id='firstname'
                label='שם פרטי'
                autoFocus
                validators={[
                  "required",
                  "minStringLength:2",
                  // "minStringLength:25",
                ]}
                errorMessages={[
                  "שדה חובה",
                  "יש להכניס בין 2-25 תווים",
                  // "יש להכניס בין 2-25 תווים",
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                onChange={(e) => onChange(e)}
                value={lastname}
                variant='outlined'
                required
                fullWidth
                id='lastname'
                label='שם משפחה'
                name='lastname'
                type='text'
                autoComplete='lastname'
                validators={[
                  "required",
                  "minStringLength:2",
                  // "minStringLength:25",
                ]}
                errorMessages={[
                  "שדה חובה",
                  "יש להכניס בין 2-25 תווים",
                  // "יש להכניס בין 2-25 תווים",
                ]}
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
                validators={["required", "minStringLength:6"]}
                errorMessages={["שדה חובה", "יש להכניס מספר בעל 10 ספרות"]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                onChange={(e) => onChange(e)}
                value={password}
                variant='outlined'
                required
                fullWidth
                name='password'
                label='סיסמא'
                type='password'
                id='password'
                autoComplete='current-password'
                validators={["required"]}
                errorMessages={["שדה חובה"]}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I want to receive inspiration, marketing promotions and updates via email.'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            הרשמה
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='\' href='#' variant='body2'>
                משתמש רשום? לחץ כאן להתחברות
              </Link>
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
      <Box mt={5}>{/* <Copyright /> */}</Box>
    </Container>
  );
};
Register.propTypes = {
  register: PropTypes.func.isRequired,
};
export default connect(null, { register })(Register);
