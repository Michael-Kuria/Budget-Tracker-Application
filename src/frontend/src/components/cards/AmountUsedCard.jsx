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

const AmountUsedCard = ({ totalExpenses }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        borderRadius: "1rem",
        height: "fit",
        width: "250px",
        background: "#f5fdf9",
        alignItems: "left",
        // justifyContent: "space-between",
        border: "1px solid #99EDC3",
        gap: "2rem",
      }}
    >
      <Typography
        component="p"
        variant="body2"
        sx={{ lineHeight: 0.5, fontWeight: 300 }}
      >
        Amount used
      </Typography>
      <Typography
        component="h6"
        variant="subtitle1"
        sx={{ fontWeight: 500, lineHeight: 0.5 }}
      >
        Ksh {Intl.NumberFormat("en-US", 2).format(totalExpenses)}
      </Typography>
      {/* <Typography component="p" variant="body2">
        spent already
      </Typography> */}
      {/* <BorderLinearProgress variant="determinate" value={80} /> */}
    </Paper>
    // <Box>
    //   <Card variant="outlined">
    //     <CardItems amountLeft={amountLeft} />
    //   </Card>
    // </Box>
  );
};

export default AmountUsedCard;
