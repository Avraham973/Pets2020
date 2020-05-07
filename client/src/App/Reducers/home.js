/** @format */

import { ABOUT_ME, FACEBOOK_REVIEWS } from "../Action/types";

const initialState = {
  aboutMe: `שמי לירן בן צבי, מאלף כלבים בשרון ובמרכז, בעל ניסיון של עשור
    באילוף מאות כלבים מכל רחבי הארץ. במהלך העבודה שלי עם כלבים
    מסוגים שונים ובעלי בעיות התנהגות שונות, אני לומד כל פעם מחדש
    כי אילוף הוא תהליך מורכב הכרוך בהפגנת כבוד ועקביות וביצירת שפה
    משותפת בין הבעלים לבין הכלב. בעבודה שלנו יחד נלמד כי כלב
    שמתרגל לטיפול מסור וסדר יום קבוע, יהפוך לכלב מאוזן, וכמו שאני
    תמיד אומר, כלב מאוזן הוא כלב מאושר! אנא אל תהססו להתקשר בכדי
    להתחיל בתהליך או אפילו רק כדי להתייעץ ולשוחח:052-3845449`,
  reviews: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ABOUT_ME:
      return {
        ...state,
      };
    case FACEBOOK_REVIEWS:
      return {
        ...state,
        reviews: payload,
      };

    default:
      return state;
  }
}
