/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
  Button,
} from "@material-ui/core";

const useStyle = makeStyles({
  title: {
    textAlign: "left",
  },
  content: {
    textAlign: "justify",
    textAlignLast: "left",
  },
});

export function AlertDialog(props) {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        color='primary'
        onClick={handleClickOpen}
        style={{ border: "none", backgroundColor: "none" }}
        className='alertbox'>
        קרא עוד
        <ArrowLeftIcon style={{ fill: "white" }} />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle className={classes.title} id='alert-dialog-title'>
          {props.dialogHeading}
        </DialogTitle>
        <DialogContent className={classes.content}>
          <DialogContentText id='alert-dialog-description'>
            {props.dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary' autoFocus>
            סגור
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
