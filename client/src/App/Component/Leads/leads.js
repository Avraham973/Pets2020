/** @format */
//https://material-table.com/#/docs/all-props

import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { MuiThemeProvider, Paper } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { getAllLeads, updateLead } from "../../Action/leads";
import { connect } from "react-redux";
import Loading from "../SharedComponent/Loading";

function LeadsTable({ updateLead, getAllLeads, leads: { leads, loading } }) {
  useEffect(() => {
    getAllLeads();
  }, [getAllLeads]);
  useEffect(() => {
    setState((state) => ({ ...state, data: leads }));
  }, [leads]);

  const saveData = (row) => {
    var id = row._id;
    delete row._id;
    updateLead(id, row);

    console.log(row);
  };

  const [state, setState] = React.useState({
    columns: [
      { title: "תאריך", field: "date", type: "date" },
      { title: "שם מלא", field: "fName" },
      { title: "טלפון", field: "phone" },
      { title: "אימייל", field: "email", type: "string" },
      { title: "מידע כללי", field: "text", type: "string" },
      {
        title: "יצרתי קשר?",
        field: "isCallback",
        lookup: { true: "כן", false: "לא" },
      },
    ],
    data: [],
  });

  const theme = createMuiTheme({
    direction: "rtl",
  });

  return loading ? (
    <Loading />
  ) : (
    <MuiThemeProvider theme={theme}>
      <br />
      <MaterialTable
        localization={{
          toolbar: {
            searchPlaceholder: "חיפוש",
          },
          body: {
            deleteTooltip: "Delete",
          },
        }}
        options={{
          sorting: true,
          exportButton: true,
        }}
        title='לידים'
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 700);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              saveData(newData);
              setTimeout(() => {
                // const dataUpdate = [...state];
                // const index = oldData.tableData.id;
                // dataUpdate[index] = newData;
                //saveData(newData);
                //setState([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
      <br />
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  leads: state.leads,
});

export default connect(mapStateToProps, { getAllLeads, updateLead })(
  LeadsTable
);
