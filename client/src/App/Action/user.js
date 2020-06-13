/** @format */

import axios from "axios";
import { ADD_LEAD } from "./types";
import { showAlert } from "../Action/alert";

const BASE_URL = process.env.REACT_APP_NODE_ENV;

export const addLead = (fName, phone, email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ fName, phone, email });

  try {
    const response = await axios.post(`${BASE_URL}/api/lead`, body, config);

    const alert = {
      type: "success",
      title: "תודה שפנית אלינו!",
      content: "אנו עושים את מיטב המאמצים לחזור אליכם בהקדם האפשרי. ",
      showCancel: true,
    };

    // dispatch({
    //   type: ADD_LEAD,
    //   payload: response.data,
    // });
    dispatch(showAlert(alert));
  } catch (error) {
    if (error) {
      //   dispatch({
      //     type: REGISTER_FAIL,
      //   });
      dispatch(showAlert(error.response.data, 36000));
    }
  }
};
