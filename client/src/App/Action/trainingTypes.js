/** @format */

import axios from "axios";
import { TRAINING_TYPES } from "./types";
const BASE_URL = process.env.REACT_APP_NODE_ENV;

export const getTrainingTypes = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/trainingtypes`);

    dispatch({
      type: TRAINING_TYPES,
      payload: response.data,
    });
  } catch (error) {
    ///todo: to add here errors handler//
  }
};
