/** @format */

import axios from "axios";
import { TRAINING_TYPES } from "./types";

export const getTrainingTypes = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/trainingtypes");

    dispatch({
      type: TRAINING_TYPES,
      payload: response.data,
    });
  } catch (error) {
    ///todo: to add here errors handler//
  }
};
