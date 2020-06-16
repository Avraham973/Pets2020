/** @format */
//https://react-slick.neostack.com/docs/example/multiple-items
//https://github.com/akiran/react-slick/blob/master/examples/CustomArrows.js
import React, { Component, useEffect, useState } from "react";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import "../../../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    direction: "rtl",
    minWidth: 155,
    display: "inline-block",
    margin: "2%",
    border: "1px solid #eee",
    boxShadow: "0 2px 2px #ccc",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    textAlign: "justify",
    minHeight: "120px",
  },
});
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, backgroundColor: "green" }}
      onClick={onClick}
    />
  );
}

const reviews = {
  data: [
    {
      created_time: "2020-03-14T20:11:04+0000",
      recommendation_type: "positive",
      review_text:
        'הגענו אל לירן דרך סרטונים בפייסבוק.\nלאחרונה אימצנו כלב נוסף אשר לא הסתדר עם כלבנו הפז"מניק, פנינו אל לירן כדי שיכול לעזור לנו להבין כיצד להתנהג בהתאם למצב הנוכחי ולעודד אותם להתחבר.\nלירן שמח לעזור והיה זמין לכל שאלה, אחרי מפגש אחד בודד הכלבים משחקים ונהנים יחדיו.\nאנו ממליצים מאד על לירן המדהים, וכמובן שאנחנו נחזור ללירן למפגשים נוספים.',
    },
    {
      created_time: "2020-02-15T13:06:33+0000",
      recommendation_type: "positive",
      review_text:
        "לירן מאלף את הכלב שלנו. דרכו למדנו את דרך החשיבה של הכלב, היכולת שלנו ללמד אותו ולאלף אותו, היעולת שלנו להוביל טותו ולא להיות מובלים.... מליצים מאד על לירן כמאלף. מעבר למקצועיות גם הנועם שלו, הזמינות לכל עצה שזקוקים... הסבלנות והקשר עם הכלב. עכשיו מצטרפים גם  לאילוף הקבוצת.\nמשפחת שיפוני זכרון יעקב",
    },
    {
      created_time: "2020-01-13T09:19:59+0000",
      recommendation_type: "positive",
      review_text:
        "אל לירן הגענו לפני בערך שנה, מפוסטים והמלצות בקבוצה. ידעתי שאני צריכה מאלף אסרטיבי שירתום את בעלי הספקן לאילוף הכלב בר החמוד אך פחדן מאוווד ולעיתים בעייתי כתוצאה מכך. בסבלנות רבה, ליווה אותנו לירן במשך כמה שיעורים, נתן לנו כלים להתמודד עם בעיות התנהגות שלא מצאנו להם פתרון בעצמנו, ואז כשהייתי בהיריון נרתם לירן שוב לעזרתנו כשהכלב החליט שלוקח על עצמו את תפקיד המגונן של הבית.\nבקיצור, ברגישות ואסרטיביות מלווה אותנו לירן בכל שלב בחיים שלנו, המלצתי עליו לחברים וממליצה לכל מי ששאל אותי. (מתנצלת שלקח לי רק שנה לכתוב את ההמלצה..)",
    },
    {
      created_time: "2019-12-30T12:35:17+0000",
      recommendation_type: "positive",
      review_text:
        "כבר בשיחה הראשונה מרגישים את הסבלנות, המקצועויות והאוזן קשבת. תודה רבה על העצות והטיפים. לירן אתה אדם מיוחד ובהחלט מגיע לך כל הפרגון❣❣",
    },
    {
      created_time: "2019-12-26T07:32:13+0000",
      recommendation_type: "positive",
      review_text: "מאלף מקצועי, מלא סבלנות \nממליצה בחום",
    },
  ],
};
export default function MultipleItems(props) {
  //const reviews = props.reviews;
  const classes = useStyles();

  function sliders() {
    return reviews.data.map((data, index) => {
      return (
        <Card className={classes.root} key={index}>
          <CardContent>
            <Typography className={classes.text} variant='body2' component='p'>
              <FormatQuoteIcon />
              {`${data.review_text.substring(0, 180)}...`}
              <FormatQuoteIcon />

              <a href='#'>קרא עוד</a>
            </Typography>
          </CardContent>
        </Card>
      );
    });
  }

  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 4000,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // return (
  //   <Container>
  //     <h2 style={{ textAlign: "center" }}> לקוחות מספרים </h2>
  //     <Slider {...settings}>{sliders()}</Slider>
  //   </Container>
  // );
  return (
    <div className='container' style={{ height: "fit-content" }}>
      <Slider {...settings}>
        <div>
          <div className='card'>
            <h4>Title 1</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>
        <div>
          <div className='card'>
            <h4>Title 2</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>
        <div>
          <div className='card'>
            <h4>Title 3</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>

        <div>
          <div className='card'>
            <h4>Title 4</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>

        <div>
          <div className='card'>
            <h4>Title 5</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>

        <div>
          <div className='card'>
            <h4>Title 6</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>
      </Slider>
      <br></br>
    </div>
  );
}
