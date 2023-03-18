import * as React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import { Transactions } from "../../data/Transactions";

const columns = [
  // { field: "id", headerName: "ID", flex: 0.5 },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    // cellClassName: "name-column--cell",
  },
  {
    field: "category",
    headerName: "Category",
    renderCell: (params) => <>{params.row.category.name}</>,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
  },
];

const TransactionsTable = ({ transactions }) => {
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
      <DataGrid rows={transactions} columns={columns} />
    </Box>
  );
};

export default TransactionsTable;
