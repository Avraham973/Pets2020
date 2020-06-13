/** @format */

import { ADD_LEAD } from "../Action/types";
import { Switch } from "@material-ui/core";

const initialState = {
  lead: null,
  loading: true,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_LEAD:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    default:
      return state;
  }
}
