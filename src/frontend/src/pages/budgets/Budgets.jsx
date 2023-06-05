import * as React from "react";
import Title from "../../components/title/Title";
import { Box, Button, Paper, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import BudgetDrawer from "../../components/global/budgetDrawer/BudgetDrawer";
import { getBudgets } from "../../client/Client";
import { useAuth } from "../../components/AuthContext/AuthContext";
import { handleLogError } from "../../components/helpers/Helpers";

const Budgets = () => {
  const [openBudgetDrawer, setOpenBudgetDrawer] = React.useState(false);
  const toggleBudgetDrawer = () => setOpenBudgetDrawer(!openBudgetDrawer);
  const [budgets, setBudgets] = React.useState([]);
  const [budgetToEdit, setBudgetToEdit] = React.useState(null);
  const { getToken } = useAuth();

  /**
   * Fetch all the budgets from the database
   */
  const fetchAllBudgets = () => {
    const token = getToken();
    getBudgets(token)
      .then((response) => response.json())
      .then((data) => setBudgets(data))
      .catch((error) => handleLogError(error));
  };

  /**
   *
   * function to be called once the component renders
   */

  React.useEffect(() => {
    fetchAllBudgets();
  }, []);

  /**
   * To be called once the edit button is clicked
   * @param {*} budget
   */
  const handleEditBudget = (budget) => {
    setBudgetToEdit(budget);
    toggleBudgetDrawer();
  };

  /**
   * A component to render the edit button
   * @param {} param0
   * @returns
   */
  const ActionButton = ({ handleEditBudgetClick }) => {
    return (
      <Paper
        style={{
          display: "flex",
          padding: "4px",
          height: "fit-content",
        }}
      >
        <IconButton size="small" onClick={handleEditBudgetClick}>
          <EditIcon fontSize="inherit" />
        </IconButton>
      </Paper>
    );
  };

  /**
   * A definition of how the table columns will be defined
   */
  const columns = [
    {
      field: "time",
      headerName: "Time",
      renderCell: (params) => params.row.month + " " + params.row.year,
      flex: 0.4,
    },
    {
      field: "budget",
      headerName: "Budget",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.3,
    },
    {
      field: "financialGoals",
      headerName: "Financial Goals",
      flex: 0.7,
    },
  ];

  return (
    <>
      <Title
        title="Budget"
        subTitle="Manage  your personal finance & budget to meet your personal goal"
      />
      <BudgetDrawer
        openBudgetDrawer={openBudgetDrawer}
        toggleBudgetDrawer={toggleBudgetDrawer}
        fetchAllBudgets={fetchAllBudgets}
        budgetToEdit={budgetToEdit}
        setBudgetToEdit={setBudgetToEdit}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              borderRadius: "100px",
              backgroundColor: "#007bff",
              width: "fit-content",
            }}
            onClick={toggleBudgetDrawer}
          >
            Add Budget
          </Button>
        </Box>

        <Box
          height="60vh"
          m="20px 0 0 0"
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
              backgroundColor: "#007bff", //3379FF
              borderBottom: "none",
              fontSize: "1.1rem",
            },
            "& .MuiDataGrid-virtualScroller": {
              // backgroundColor: "#adc9ff",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: "#007bff",
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
              rows={budgets}
              columns={[
                ...columns,
                {
                  headerName: "Action",
                  field: "action",
                  renderCell: (params) => (
                    <ActionButton
                      handleEditBudgetClick={() => {
                        handleEditBudget(params.row);
                      }}
                    />
                  ),
                  flex: 0.2,
                },
              ]}
              getRowId={(row) => row.id}
            />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Budgets;
