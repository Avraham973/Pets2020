/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    direction: "rtl",
    minWidth: 155,
    display: "inline-block",
    margin: "0.3%",
    border: "1px solid #eee",
    boxShadow: "0 2px 2px #ccc",
    background: "linear-gradient(#83a4d4, #b6fbff)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <div dir='rtl'>
      <Card className={classes.root}>
        <CardContent dir>
          <Typography variant='h5' component='h2'>
            {props.title}כותרת
          </Typography>
          <Typography variant='body2' component='p'>
            {props.text}
            פה אני אשים מלל קצר לשאול את לירן
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>קרא עוד</Button>
        </CardActions>
      </Card>
    </div>
  );
}
