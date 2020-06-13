/** @format */

import { combineReducers } from "redux";
import trainingTypes from "../Reducers/trainingTypes";
import alert from "../Reducers/alert";
import home from "../Reducers/home";
import auth from "../Reducers/auth";
import user from "../Reducers/user";

export default combineReducers({
  trainingTypes,
  home,
  alert,
  auth,
  user,
});
