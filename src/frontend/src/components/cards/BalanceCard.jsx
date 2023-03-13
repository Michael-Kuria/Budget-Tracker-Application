import * as React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
}));

const CardItems = ({ amountLeft }) => {
  return (
    <CardContent>
      <Typography component="p" variant="body1">
        Your are on Track
      </Typography>
      <Typography component="h6" variant="h6">
        ${amountLeft}
      </Typography>
      <Typography component="p" variant="body2">
        Left to spend
      </Typography>
      <BorderLinearProgress variant="determinate" value={80} />
    </CardContent>
  );
};

const BalanceCard = ({ amountLeft }) => {
  return (
    <Box>
      <Card variant="outlined">
        <CardItems amountLeft={amountLeft} />
      </Card>
    </Box>
  );
};

export default BalanceCard;
