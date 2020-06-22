/** @format */

import { GET_LEAD, EDIT_LEAD } from "../Action/types";
import leads from "../Component/Leads/leads";
import { getAllLeads } from "../Action/leads";

const initialState = {
  leads: [],
  loading: true,
};
const newLead = {
  date: "2020-06-13T15:15:57.548Z",
  email: "email@gmail.com",
  fName: "Tal-Avaraham",
  isCallback: true,
  phone: "0533369004",
  _id: 66,
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
    case EDIT_LEAD:
      return {
        ...state,
        leads: state.leads.map((lead) =>
          lead._id === payload.id ? { ...lead, payload } : lead
        ),
        // leads: { ...state.leads, newLead },
        loading: false,
      };
    default:
      return state;
  }
}
const test = (leads, payload) => {
  debugger;

  leads.map((lead) => (lead._id === payload.id ? console.log(...lead) : lead));
  // console.log("start: ", leads);
  // const index = leads.indexOf("_id", payload._id);
  // const newLeads = leads;
  // newLeads[index] = payload;
  // return newLeads;
  // leads.map((lead) => (lead._id === payload._id ? { ...lead, payload } : lead));
  // console.log("end: ", leads);
  // return leads;
};
