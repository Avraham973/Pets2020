/** @format */

import React, { Fragment } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { useEffect } from "react";
import background from "../../Assets/Img/usersList.jpg";
import { MuiThemeProvider, Paper } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { getAllLeads } from "../../Action/leads";
import { connect } from "react-redux";
import { data } from "jquery";

function LeadsTable({ getAllLeads, leads: { leads, loading } }) {
  useEffect(() => {
    getAllLeads();
  }, [getAllLeads]);
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
        lookup: { 0: "כן", 1: "לא" },
      },
    ],

    data: [
      {
        date: "17/5/2019",
        fName: "Baran",
        phone: "0533369004",
        email: "Avraha@gmail.com",
        text: "some text",
        isCallback: 0,
      },
      {
        date: "17/5/2020",
        fName: "Baran",
        phone: "0533369004",
        email: "Avraha@gmail.com",
        text: "some text",
        isCallback: 1,
      },
    ],
  });

  const theme = createMuiTheme({
    direction: "rtl",
  });

  return loading ? (
    <div>loading</div>
  ) : (
    <MuiThemeProvider theme={theme}>
      {console.log(leads)}
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
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          // onRowDelete: (oldData) =>
          //   new Promise((resolve) => {
          //     setTimeout(() => {
          //       resolve();
          //       setState((prevState) => {
          //         const data = [...prevState.data];
          //         data.splice(data.indexOf(oldData), 1);
          //         return { ...prevState, data };
          //       });
          //     }, 600);
          //   }),
        }}
      />
      <br />
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  leads: state.leads,
});

export default connect(mapStateToProps, { getAllLeads })(LeadsTable);
