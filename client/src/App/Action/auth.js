/** @format */

import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

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
      "Access-Control-Allow-Origin": "*",
    },
  };
  const body = JSON.stringify({ firstname, lastname, email, phone, password });

  try {
    const response = await axios.post("/api/users", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    //To add here error handling inorder to display the errors to user/

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
