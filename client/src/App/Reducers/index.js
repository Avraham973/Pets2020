/** @format */

import { combineReducers } from "redux";
import trainingTypes from "../Reducers/trainingTypes";
import alert from "../Reducers/alert";
import home from "../Reducers/home";
import auth from "../Reducers/auth";
import leads from "../Reducers/leads";

export default combineReducers({
  trainingTypes,
  home,
  alert,
  auth,
  leads,
});
