/** @format */

import { GET_LEAD } from "../Action/types";

const initialState = {
  leads: null,
  loading: true,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_LEAD:
      return {
        ...state,
        leads: payload,
        loading: false,
      };

    default:
      return state;
  }
}
