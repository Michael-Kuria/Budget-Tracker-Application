import * as React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Transactions } from "../../data/Transactions";

const columns = [
  { field: "id", headerName: "ID", flex: 0.5 },
  { field: "registrardId", headerName: "Registrar ID" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
  },
  {
    field: "zipCode",
    headerName: "Zip Code",
    flex: 1,
  },
];

const TransactionsTable = () => {
  return (
    <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          // color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#3379FF",
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          // backgroundColor: "#adc9ff",
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: "#3379FF",
        },
        "& .MuiCheckbox-root": {
          // color: `${colors.greenAccent[200]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          // color: `${colors.grey[100]} !important`,
        },
      }}
    >
      <DataGrid rows={Transactions} columns={columns} />
    </Box>
  );
};

export default TransactionsTable;
