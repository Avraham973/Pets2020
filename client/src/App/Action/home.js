/** @format */

import axios from "axios";
import { ABOUT_ME, FACEBOOK_REVIEWS } from "./types";

export const getAboutMe = () => async (dispatch) => {
  try {
    dispatch({
      type: ABOUT_ME,
    });
  } catch (error) {
    //To add here error handling inorder to display the errors to user/
    console.log("get about me info faild");
  }
};

export const getFacebookReviews = () => async (dispatch) => {
  const config = {
    params: {
      access_token:
        "EAAKzSYuzXPoBAHLtAI4Ljd58jCbYqGETKinxtSfEZCoo2s7UpdmPuUyx5NZBA3qh2FLu7Fw3exNCMsRpPDNXjlKFZCZA3YJwmU9ZBY3ZBciZCoVsgDUpr9q4ZCeDLBxJXcf7vn6egI81Ib1Py8DWHXw0AjOzItMOky4GVGBc5V8JFmMVuRM0qJ6A",
    },
  };

  try {
    const resoponse = await axios(
      "https://graph.facebook.com/862100487311283/ratings",
      config
    );

    dispatch({
      type: FACEBOOK_REVIEWS,
      payload: resoponse.data.data,
    });
  } catch (error) {
    //To add here error handling inorder to display the errors to user/
    console.log("get about me info faild");
  }
};
