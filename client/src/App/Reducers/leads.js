/** @format */

import { GET_LEAD, EDIT_LEAD } from "../Action/types";
import leads from "../Component/Leads/leads";
import { getAllLeads } from "../Action/leads";

const initialState = {
  leads: [],
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
    case EDIT_LEAD:
      return {
        ...state,
        leads: state.leads.map((lead) =>
          lead._id === payload._id ? (lead = payload) : lead
        ),

        loading: false,
      };
    default:
      return state;
  }
}
