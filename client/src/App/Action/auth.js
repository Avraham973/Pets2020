/** @format */

import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";
import { showAlert } from "../Action/alert";
import logo from "../Assets/Img/logoA.png";
const BASE_URL = process.env.REACT_APP_NODE_ENV;

//Regester User

export const register = ({
  firstname,
  lastname,
  email,
  phone,
  password,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ firstname, lastname, email, phone, password });

  try {
    const response = await axios.post(`${BASE_URL}/api/users`, body, config);

    const alert = {
      type: "success",
      title: "נרשמת ל-כשכשתא בהצלחה!",
      content: "שמחים שהצטרפת אלינו",
      showCancel: false,
    };

    dispatch(
      {
        type: REGISTER_SUCCESS,
        payload: response.data,
      },
      showAlert(alert)
    );
  } catch (error) {
    if (error) {
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch(showAlert(error.response.data));
    }
  }
};
