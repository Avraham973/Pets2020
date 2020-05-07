/** @format */

import { TRAINING_TYPES } from "../Action/types";

const initialState = {
  trainingTypes: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TRAINING_TYPES:
      return {
        ...state,
        trainingTypes: payload,
        loading: false,
      };

    default:
      return state;
  }
}
