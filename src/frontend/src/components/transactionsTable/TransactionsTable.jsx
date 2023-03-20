import * as React from "react";
import { Box, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const renderEmoji = (x) => {
  switch (x.row.category.name) {
    case "Clothing":
      return <p>👔 Clothing</p>;
    case "Debt":
      return <p>💸 Debt</p>;
    case "Food":
      return <p>🥘 Food</p>;
    case "Household_Supplies":
      return <p>🚽 Household_Supplies</p>;
    case "Housing":
      return <p>🏠 Housing</p>;
    case "Medical":
      return <p>⚕️ Medical</p>;
    case "Personal":
      return <p>🏌️🏿 Personal</p>;
    case "Transportation":
      return <p>🚌 Transportation</p>;
    case "Utilities":
      return <p>🚰 Utilities</p>;
    default:
      return <p>📝</p>;
  }
};
const columns = [
  // { field: "id", headerName: "ID", flex: 0.5 },
  {
    field: "date",
    headerName: "Date",
    // cellClassName: "name-column--cell",
    flex: 0.3,
  },
  {
    field: "category",
    headerName: "Category",
    renderCell: (params) => renderEmoji(params),
    flex: 0.3,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    headerAlign: "left",
    align: "left",
    flex: 0.3,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
  },
];

const TransactionsTable = ({ transactions, height }) => {
  return (
    <Box
      height={height}
      m="40px 0 0 0"
      borderRadius="1rem"
      overflow="hidden"
      sx={{
        "& .MuiPaper-root": {
          height: "100%",
        },
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .MuiDataGrid-cellContent": {
          width: "400px",
        },
        "& .name-column--cell": {
          // color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#3379FF",
          borderBottom: "none",
          fontSize: "1.1rem",
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
      <Paper>
        <DataGrid rows={transactions} columns={columns} />
      </Paper>
    </Box>
  );
};

export default TransactionsTable;
