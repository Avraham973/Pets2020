/** @format */

import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import PetsIcon from "@material-ui/icons/Pets";
import trainingTypes from "../../Reducers/trainingTypes";
import { TrainingServiceForm } from "../TrainingService/TrainingServiceForm";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  List,
  Drawer,
  ListItem,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    marginRight: theme.spacing(2),
    direction: "rtl",
    width: "250px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(5),
  },
  callBtn: {
    color: "white",
  },
  link: {
    textDecoration: "none",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [drawerState, setDrawerState] = useState(false);

  const onDrawerClicked = () => {
    setDrawerState(!drawerState);
  };
  return (
    <Fragment>
      <AppBar style={{ backgroundColor: "#27ae60", position: "fixed" }}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={onDrawerClicked}>
            <PetsIcon />
          </IconButton>

          <Button
            className={classes.callBtn}
            variant='outlined'
            href='tel:0523845449'>
            צרו קשר - 0523845449
          </Button>
          <Link className={classes.link} to='/'>
            <Button variant='outlined' color='inherit'>
              כשכשתא
            </Button>
          </Link>
          <Link className={classes.link} to='/login'>
            <Button
              to='/login'
              primary='Login'
              className={classes.root}
              color='inherit'>
              התחבר
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerState} onClose={onDrawerClicked}>
        <List className={classes.list}>
          <ListItem>סוגי אילוף</ListItem>
        </List>
      </Drawer>
    </Fragment>
  );
};

export default Navbar;
