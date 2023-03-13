import * as React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const CardItems = ({ amountUsed }) => {
  return (
    <CardContent>
      <Typography component="p" variant="body1">
        Your total balance
      </Typography>
      <Typography component="h6" variant="h6">
        ${amountUsed}
      </Typography>
    </CardContent>
  );
};

const AmountUsedCard = ({ amountUsed }) => {
  return (
    <Box sx={{ height: "100%" }}>
      <Card variant="outlined">
        <CardItems amountUsed={amountUsed} />
      </Card>
    </Box>
  );
};

export default AmountUsedCard;
