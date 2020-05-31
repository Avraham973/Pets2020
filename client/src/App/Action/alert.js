/** @format */

import * as types from "../Action/types";
import { v4 as uuidv4 } from "uuid";
const addAlert = (alert) => ({
  type: types.ADD_ALERT,
  alert,
});

const removeAlert = (id) => ({
  type: types.REMOVE_ALERT,
  id,
});

export const showAlert = (alertProps, timeout = 5000) => (dispatch) => {
  console.log("show alert");
  if (!alertProps.id) {
    alertProps.id = uuidv4();
  }

  // auto-close on confirm
  if (alertProps.onConfirm) {
    const onConfirm = alertProps.onConfirm;
    alertProps.onConfirm = (...args) => {
      onConfirm(...args);
      closeAlert(alertProps.id)(dispatch);
    };
  } else {
    alertProps.onConfirm = () => closeAlert(alertProps.id)(dispatch);
  }

  // auto-close on cancel
  if (alertProps.onCancel) {
    const onCancel = alertProps.onCancel;
    alertProps.onCancel = (...args) => {
      onCancel(...args);
      closeAlert(alertProps.id)(dispatch);
    };
  } else {
    alertProps.onCancel = () => closeAlert(alertProps.id)(dispatch);
  }

  dispatch(addAlert(alertProps));
  setTimeout(() => dispatch(removeAlert(alertProps.id)), timeout);
};

export const closeAlert = (id) => (dispatch) => {
  dispatch(removeAlert(id));
};
