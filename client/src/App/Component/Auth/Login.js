/** @format */

import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { login } from "../../Action/auth";
import PropTypes from "prop-types";

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
    marginTop: theme.spacing(8),
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

const Login = ({ login, isAuth }) => {
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  if (isAuth) {
    return <Redirect to='/' />;
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar src={Logo}></Avatar>
        <Typography component='h1' variant='h5'>
          התחברות לכשכשתא אילוף כלבים
        </Typography>
        <ValidatorForm
          className={classes.form}
          noValidate
          onSubmit={(e) => onSubmit(e)}>
          <Grid container spacing={2}>
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
            <Grid item xs={12} style={{ textAlign: "justify" }}>
              <FormControlLabel
                style={{ textAlign: "justify" }}
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='זכור פרטים'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            התחברות
          </Button>
          <Grid container justify='flex-start'>
            <Grid item>
              <Link to='/register'>עדיין לא רשום? לחץ כאן להרשמה</Link>
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
    </Container>
  );
};

Login.protoTypes = {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
