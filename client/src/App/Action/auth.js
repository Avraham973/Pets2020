/** @format */

import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

//Regester User

export const register = ({ name, email, password, phone }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password, phone });

  try {
    const response = await axios.post("api/users", body, config);

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
