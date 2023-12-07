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
        height: "fit",
        width: "250px",
        background: "#adc9ff",
        alignItems: "left",
        // justifyContent: "space-between",
        border: "1px solid #3379FF",
        gap: "2rem",
      }}
    >
      <Typography component="p" variant="body2" sx={{ lineHeight: 0.5, fontWeight: 300}}>
        Your balance
      </Typography>
      <Typography
        component="h6"
        variant="subtitle1"
        sx={{ fontWeight: 500, lineHeight: 0.5 }}
      >
        {budget.budget !== undefined ? (
          `Ksh ${balance}`
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
