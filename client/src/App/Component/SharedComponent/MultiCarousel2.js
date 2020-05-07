/** @format */
//https://react-slick.neostack.com/docs/example/multiple-items
import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ReviewCard from "../Cards/ReviewCard";
import "../../../App.css";
import { Container } from "@material-ui/core";

var settings = {
  nextArrow: <Arrow />,
  prevArrow: <Arrow />,
  adaptiveHeight: true,
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

export default function MultipleItems(props) {
  function sliders() {
    return reviews.data.map((data, index) => {
      return (
        <ReviewCard
          key={index}
          date={data.created_time}
          text={data.review_text}
        />
      );
    });
  }

  return (
    <Fragment>
      <Slider {...settings}>{sliders()}</Slider>
    </Fragment>
  );
}
