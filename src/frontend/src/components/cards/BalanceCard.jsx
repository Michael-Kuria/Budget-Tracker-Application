import * as React from "react";
import { Typography, Paper } from "@mui/material";

const BalanceCard = ({ amountLeft }) => {
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
      }}
    >
      <Typography component="p" variant="body1">
        Your total balance
      </Typography>
      <Typography component="h6" variant="h4">
        ${amountLeft}
      </Typography>
    </Paper>
  );
};

export default BalanceCard;
