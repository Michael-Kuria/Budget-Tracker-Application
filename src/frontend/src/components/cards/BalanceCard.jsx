import * as React from "react";
import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 18,
  borderRadius: 10,
  width: "60%",
  backgroundColor: "#99EDC3",
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#4c9c73",
  },
}));

const BalanceCard = ({ amountLeft }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        borderRadius: "1rem",
        width: "300px",
        height: " 100%",
        background: "#f5fdf9",
        alignItems: "center",
        justifyContent: "center",
        gap: ".5rem",
        border: "1px solid #99EDC3",
      }}
    >
      <Typography component="p" variant="body1">
        Your are on Track
      </Typography>
      <Typography component="h6" variant="h5">
        ${amountLeft}
      </Typography>
      <Typography component="p" variant="body2">
        Left to spend
      </Typography>
      <BorderLinearProgress variant="determinate" value={80} />
    </Paper>
    // <Box>
    //   <Card variant="outlined">
    //     <CardItems amountLeft={amountLeft} />
    //   </Card>
    // </Box>
  );
};

export default BalanceCard;
