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
  Typography,
  List,
  Drawer,
  ListItem,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuIcon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  callBtn: {
    color: "white",
  },
  list: {
    marginRight: theme.spacing(2),
    width: "250px",
  },
  button: {
    color: "white",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [drawerState, setDrawerState] = useState(false);

  const onDrawerClicked = () => {
    setDrawerState(!drawerState);
  };
  return (
    <div className={classes.root}>
      <AppBar position='sticky' style={{ backgroundColor: "#1B5E20" }}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuIcon}
            onClick={onDrawerClicked}
            color='inherit'
            aria-label='menu'>
            <PetsIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            <Link className={classes.link} to='/register'>
              <Button
                to='/register'
                primary='Register'
                className={classes.root}
                color='inherit'>
                הרשמה
              </Button>
            </Link>
          </Typography>
          <Link className={classes.link} to='/'>
            <Button variant='outlined' color='inherit'>
              כשכשתא
            </Button>
          </Link>
          <Button
            className={classes.callBtn}
            variant='outlined'
            href='tel:0523845449'>
            צרו קשר - 0523845449
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerState} onClose={onDrawerClicked}>
        <List className={classes.list}>
          <ListItem>סוגי אילוף</ListItem>
        </List>
      </Drawer>
    </div>
  );
  //   <Fragment>
  //     <AppBar style={{ backgroundColor: "#27ae60", position: "fixed" }}>
  //       <Toolbar>
  //         <IconButton
  //           edge='start'
  //           className={classes.menuButton}
  //           color='inherit'
  //           aria-label='menu'
  //           onClick={onDrawerClicked}>
  //           <PetsIcon />
  //         </IconButton>
  //         <Button
  //           className={classes.callBtn}
  //           variant='outlined'
  //           href='tel:0523845449'>
  //           צרו קשר - 0523845449
  //         </Button>
  //         <Link className={classes.link} to='/'>
  //           <Button variant='outlined' color='inherit'>
  //             כשכשתא
  //           </Button>
  //         </Link>
  //         <Link className={classes.link} to='/login'>
  //           <Button
  //             to='/login'
  //             primary='Login'
  //             className={classes.root}
  //             color='inherit'>
  //             התחבר
  //           </Button>
  //         </Link>
  //       </Toolbar>
  //     </AppBar>
  //     <Drawer open={drawerState} onClose={onDrawerClicked}>
  //       <List className={classes.list}>
  //         <ListItem>סוגי אילוף</ListItem>
  //       </List>
  //     </Drawer>
  //   </Fragment>
  // );
};

export default Navbar;
