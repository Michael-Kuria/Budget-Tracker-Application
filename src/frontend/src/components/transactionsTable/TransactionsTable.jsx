import * as React from "react";
import { Box, IconButton, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteTransaction } from "../../client/Client";
import { useAuth } from "../AuthContext/AuthContext";

const TransactionsTable = ({
  transactions,
  height,
  setTransactionToEdit,
  toggleTransactionDrawer,
  isTransactionPage,
  fetchAllTransactions,
  fetchCategoriesAndSum,
}) => {
  /**
   * Call the client component's delete method with the selected row and
   * update the transactions and categoriesandsum.
   *
   */
  const { getToken } = useAuth();
  const handleDeleteTransaction = (transaction) => {
    const token = getToken();
    deleteTransaction(transaction.id, token)
      .then(() => {
        console.log(transaction.id + " deleted successfully");
        fetchAllTransactions();
        console.log("At Categories and sum");
        fetchCategoriesAndSum();
      })
      .catch((error) => {
        // error.response.json().then((res) => {
        console.log(error.message);
        // });
      });
  };

  /**
   * update transactionToEdit object, with the selected row and open the transaction drawer
   * sending the data to the server will be handled by TransactionDrawer component
   */
  const handleEditTransaction = (transaction) => {
    setTransactionToEdit(transaction);
    toggleTransactionDrawer();
  };

  /**
   * A component containing the Delete and edit buttons
   */
  const ActionButtons = ({ handleDelete, handleEdit }) => {
    return (
      <Paper
        style={{
          display: "flex",
          flexDirection: "row",
          gap: ".2rem",
          padding: "4px",
          height: "fit-content",
        }}
      >
        <IconButton size="small" onClick={handleDelete}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton size="small" onClick={handleEdit}>
          <EditIcon fontSize="inherit" />
        </IconButton>
      </Paper>
    );
  };

  /**
   * Render the Category column with an emoji
   */
  const CategoryWithEmoji = ({ emoji, text }) => {
    return (
      <p>
        <span style={{ fontSize: "1.5rem", paddingRight: ".5rem" }}>
          {emoji}
        </span>
        {text}
      </p>
    );
  };

  const renderCategoryWithEmoji = (x) => {
    switch (x.row.category.name) {
      case "Clothing":
        return <CategoryWithEmoji emoji="👔" text="Clothing" />;
      case "Loan":
        return <CategoryWithEmoji emoji="💸" text="Loan" />;
      case "Food":
        return <CategoryWithEmoji emoji="🥘" text="Food" />;
      case "Household Supplies":
        return <CategoryWithEmoji emoji="🚽" text="Household Supplies" />;
      case "Housing":
        return <CategoryWithEmoji emoji="🏠" text="Housing" />;
      case "Medical":
        return <CategoryWithEmoji emoji="⚕️" text="Medical" />;
      case "Personal":
        return <CategoryWithEmoji emoji="🏌️🏿 " text="Personal" />;
      case "Transportation":
        return <CategoryWithEmoji emoji="🚌" text="Transportation" />;
      case "Utilities":
        return <CategoryWithEmoji emoji="🚰" text="Utilities" />;
      case "Household Items":
        return <CategoryWithEmoji emoji="🏌️🏿 " text="Household Items" />;
      case "Giving":
        return <CategoryWithEmoji emoji="💸" text="Giving" />;
      case "Transaction costs":
        return <CategoryWithEmoji emoji="💸" text="Transaction costs" />;
      case "Learning":
        return <CategoryWithEmoji emoji="📝" text="Learning" />;
      default:
        return <CategoryWithEmoji emoji="📝" text="" />;
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
      renderCell: (params) => renderCategoryWithEmoji(params),
      flex: 0.4,
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
      flex: 0.7,
    },
  ];

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
          backgroundColor: "#3A7AFF", //3379FF
          borderBottom: "none",
          fontSize: "1.1rem",
          color: "#ffff",
        },
        "& .MuiDataGrid-virtualScroller": {
          // backgroundColor: "#adc9ff",
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: "#3A7AFF",
          color: "#ffff",
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
        <DataGrid
          rows={transactions}
          columns={
            isTransactionPage
              ? [
                  ...columns,
                  {
                    headerName: "Actions",
                    field: "actions",
                    renderCell: (params) => (
                      <ActionButtons
                        handleEdit={() => handleEditTransaction(params.row)}
                        handleDelete={() => handleDeleteTransaction(params.row)}
                      />
                    ),
                    flex: 0.2,
                  },
                ]
              : columns
          }
          getRowId={(row) => row.id}
        />
      </Paper>
    </Box>
  );
};

export default TransactionsTable;
