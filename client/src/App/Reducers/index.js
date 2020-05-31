/** @format */

import { combineReducers } from "redux";
import trainingTypes from "../Reducers/trainingTypes";
import alert from "../Reducers/alert";
import home from "../Reducers/home";

export default combineReducers({
  trainingTypes,
  home,
  alert,
});
