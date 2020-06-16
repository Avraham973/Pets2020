/** @format */

import React, { Fragment } from "react";
import AlertDialog from "../SharedComponent/AlertDialog";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Fab, Divider } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import Moment from "react-moment";
// import moment from "moment";

const useStyle = makeStyles({
  card: {
    textAlign: "center",
    maxWidth: "300px",
    margin: "auto",
    marginTop: "0.25rem",
    marginBottom: "0.5rem",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0, 0, 0, 0.3)",
  },
  text: {
    textAlign: "left",
    // minHeight: "120px",
  },
  icon: {
    color: "#27ae60",
    display: "grid",
    position: "fixed",
  },
});
export default (props) => {
  const classes = useStyle();
  return (
    <Fragment>
      <Card className={classes.card}>
        {/* <CardMedia className='media' image={props.img} /> */}
        <CardContent>
          <FacebookIcon className={classes.icon} />
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom>
            <Moment format='DD/MM/YYYY'>{props.date}</Moment>
          </Typography>
          <Typography className={classes.text} variant={"caption"}>
            {props.text && props.text.substring(0, 150) + "..."}
          </Typography>
          <Divider className='divider' light style={{ margin: "24px 0" }} />
          <Fab
            variant='extended'
            style={{
              borderColor: "#007bff",
              textTransform: "none",
              backgroundColor: "#27ae60",
              color: "#fff",
            }}>
            <AlertDialog
              className='alertbox'
              dialogHeading='ביקורת'
              dialogContent={props.text}
            />
          </Fab>
        </CardContent>
      </Card>
    </Fragment>
  );
};
