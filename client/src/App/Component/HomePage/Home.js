/** @format */

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MultiCarousel from "../../Component/SharedCompnent/MultiCarousel";
import Carousel from "../../Component/Carousel";
import TrainingTypes from "../../Component/TrainingTypes/TrainingTypes";
import axios from "axios";

import liran from "../../../App/Assets/Img/liran.jpg";
// import pic1 from "../../../App/Assets/Img/top1.jpg";
// import pic2 from "../../../App/Assets/Img/top2.jpg";
// import pic3 from "../../../App/Assets/Img/top3.jpg";
// import pic4 from "../../../App/Assets/Img/top4.jpg";

import { Avatar, Paper, Grid, Typography } from "@material-ui/core";

const text = null;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {},
  },
  paper: {
    flexGrow: 1,
    direction: "rtl",
    backgroundColor: "",
    padding: "2%",
    paddingRight: "8%",
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    // margin: "1%",
    width: theme.spacing(50),
    ["@media (max-width:700px)"]: {
      width: "250px",
      height: "250px",
    },
    height: theme.spacing(50),
    margin: "auto",
    display: "block",
  },
  typography: {
    textAlign: "initial",
  },
  serviceType: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: "auto",
  },
  button: {
    display: "flex",
    margin: "0 auto",
    backgroundColor: "#27ae60",
    "&:hover": {
      backgroundColor: "#e67e22",
    },
  },
}));

const config = {
  params: {
    access_token:
      "EAAKzSYuzXPoBAHLtAI4Ljd58jCbYqGETKinxtSfEZCoo2s7UpdmPuUyx5NZBA3qh2FLu7Fw3exNCMsRpPDNXjlKFZCZA3YJwmU9ZBY3ZBciZCoVsgDUpr9q4ZCeDLBxJXcf7vn6egI81Ib1Py8DWHXw0AjOzItMOky4GVGBc5V8JFmMVuRM0qJ6A",
  },
};

const Home = () => {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);
  const [trainingTypes, setTrainingTypes] = useState([]);

  const aboutMe = `שמי לירן בן צבי, מאלף כלבים בשרון ובמרכז, בעל ניסיון של עשור
                באילוף מאות כלבים מכל רחבי הארץ. במהלך העבודה שלי עם כלבים
                מסוגים שונים ובעלי בעיות התנהגות שונות, אני לומד כל פעם מחדש
                כי אילוף הוא תהליך מורכב הכרוך בהפגנת כבוד ועקביות וביצירת שפה
                משותפת בין הבעלים לבין הכלב. בעבודה שלנו יחד נלמד כי כלב
                שמתרגל לטיפול מסור וסדר יום קבוע, יהפוך לכלב מאוזן, וכמו שאני
                תמיד אומר, כלב מאוזן הוא כלב מאושר! אנא אל תהססו להתקשר בכדי
                להתחיל בתהליך או אפילו רק כדי להתייעץ ולשוחח:052-3845449`;

  useEffect(async () => {
    const getFacebookReviews = async () => {
      const reviews = await axios(
        "https://graph.facebook.com/862100487311283/ratings",
        config
      ).then();
      setReviews(reviews.data.data);
    };
    getFacebookReviews();

    const getTrainingTypes = async () => {
      const response = await axios.get("/api/trainingtypes");
      console.log("HOME.js: ", response);
      setTrainingTypes(response);
    };
    getTrainingTypes();
  }, []);

  return (
    <div>
      <Carousel />
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar src={liran} className={classes.avatar} />
          </Grid>
          <Grid item xs={9} sm container>
            <Grid item xs={10} container direction='column' spacing={2}>
              <Grid item xs>
                <Typography
                  className={classes.typography}
                  gutterBottom
                  variant='h2'>
                  לירן בן צבי - מאלף כלבים
                </Typography>
                <Typography
                  className={classes.typography}
                  variant='body1'
                  gutterBottom>
                  {aboutMe}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <MultiCarousel reviews={reviews} />
      <Paper className={classes.paper}>
        <TrainingTypes />
      </Paper>
    </div>
  );
};

export default Home;
