/** @format */

import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./types";
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

    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
    dispatch(showAlert(alert));
  } catch (error) {
    if (error) {
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch(showAlert(error.response.data));
    }
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const body = JSON.stringify({ email, password });

    const response = await axios.post(`${BASE_URL}/api/auth`, body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    if (error) {
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch(showAlert(error.response.data, 36000));
    }
  }
};
