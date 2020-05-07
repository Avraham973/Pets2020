/** @format */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";

import { OutlinedInput, Button, InputLabel, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "inherit",
    },
    display: "inline-block",
  },
  inputLabel: {
    backgroundColor: "white",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#2c3e50",
    color: "white",
  },
}));

export default function ComposedTextField() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  //   const [formData, setFormData] = useState({
  //     email: "",
  //     password: "",
  //     phone: "",
  //   });
  //   const { name, email, phone } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("set action ", formData);
  };

  return (
    <form
      dir='rtl'
      className={classes.root}
      noValidate
      autoComplete='off'
      onSubmit={(e) => onSubmit(e)}>
      <Grid className={classes.grid}>
        <FormControl variant='outlined'>
          <InputLabel htmlFor='component-outlined'>שם מלא</InputLabel>
          <OutlinedInput
            id='component-outlined'
            value={formData.name}
            onChange={(e) => onChange(e)}
            label='שם מלא'
          />
        </FormControl>
        <FormControl variant='outlined'>
          <InputLabel htmlFor='component-outlined'>אימייל</InputLabel>
          <OutlinedInput
            id='component-outlined'
            value={email}
            onChange={(e) => onChange(e)}
            label='email'
          />
        </FormControl>
        <FormControl variant='outlined'>
          <InputLabel htmlFor='component-outlined'>טלפון</InputLabel>
          <OutlinedInput
            id='component-outlined'
            value={formData.name}
            onChange={(e) => onChange(e)}
            label='שם מלא'
          />
        </FormControl>
        <Button
          type='submit'
          variant='contained'
          className={classes.button}
          onClick={(e) => onSubmit(e)}>
          שלח
        </Button>
      </Grid>
    </form>
  );
}
