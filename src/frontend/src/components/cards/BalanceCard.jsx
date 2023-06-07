import * as React from "react";
import { Typography, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

const BalanceCard = ({ balance, budget }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        borderRadius: "1rem",
        height: " 100%",
        width: "300px",
        background: "#adc9ff",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #3379FF",
        gap: "2rem",
      }}
    >
      <Typography component="p" variant="body1">
        Your balance
      </Typography>
      <Typography component="h6" variant="h4">
        {budget.budget !== undefined ? (
          `${balance} Ksh`
        ) : (
          <Button>
            {" "}
            <Link to="/budgets">Add budget</Link>
          </Button>
        )}
      </Typography>
    </Paper>
  );
};

export default BalanceCard;
