/** @format */

import axios from "axios";
import { GET_LEAD, EDIT_LEAD } from "./types";
import { showAlert } from "./alert";

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

    dispatch(showAlert(alert));
  } catch (error) {
    if (error) {
      dispatch(showAlert(error.response.data, 36000));
    }
  }
};

export const updateLead = (id, rowLead) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(rowLead);
  // const body = {
  //   fName: "Tal-Avaraham",
  //   phone: "0533369004",
  //   email: "email@gmail.com",
  // };
  try {
    const response = await axios.put(
      `${BASE_URL}/api/lead/edit/${id}`,
      body,
      config
    );

    dispatch({
      type: EDIT_LEAD,
      payload: response.data.lead,
    });

    dispatch(showAlert(response.data.msg));
  } catch (error) {
    if (error) {
      //dispatch(showAlert(error.response.data, 36000));
    }
  }
};

export const getAllLeads = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/lead`);

    dispatch({
      type: GET_LEAD,
      payload: response.data,
    });
  } catch (error) {
    if (error) {
      dispatch(showAlert(error.response.data, 36000));
    }
  }
};
