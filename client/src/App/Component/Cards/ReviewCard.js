/** @format */

import React, { Fragment } from "react";
import { AlertDialog } from "../SharedCompnent/AlertDialog";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Fab, Divider } from "@material-ui/core";

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
  },
});
export default () => {
  const classes = useStyle();
  return (
    <Fragment>
      <Card className={classes.card}>
        {/* <CardMedia className='media' image={props.img} /> */}
        <CardContent>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom>
            {/* {props.heading} */}
            כותרת
          </Typography>
          <Typography className={classes.text} variant={"caption"}>
            {/* {props.description} */}
            We are going to learn different kinds of species in nature that live
            together to form amazing environment.
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
              dialogContent='בעבודה שלנו יחד נלמד כי כלב שמתרגל לטיפול מסור וסדר יום קבוע, יהפוך לכלב מאוזן, וכמו שאני תמיד אומר, כלב מאוזן הוא כלב מאושר! אנא אל תהססו להתקשר בכדי להתחיל בתהליך'
            />
          </Fab>
        </CardContent>
      </Card>
    </Fragment>
  );
};
