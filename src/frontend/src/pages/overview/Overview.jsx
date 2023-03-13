import * as React from "react";
import { Container, Grid, Paper } from "@mui/material";
import Title from "../../components/title/Title";
import AmountUsedCard from "../../components/cards/AmountUsedCard";
import BalanceCard from "../../components/cards/BalanceCard";
import PieChart from "../../components/pieChart/PieChart";
import LineChart from "../../components/lineChart/LineChart";

const Overview = () => {
  return (
    <>
      <Title
        title="Overview"
        subTitle="Manage  your personal finance & budget to meet your personal goal"
      />

      {/* <Box sx={{ display: "flex", flexDirection: "row" }}> */}
      <Grid container spacing={4}>
        <Grid item lg={4} xs={12}>
          <AmountUsedCard amountUsed="20000" />
        </Grid>
        <Grid item lg={4} xs={12}>
          <BalanceCard amountLeft="20202020" />
        </Grid>
        <Grid item lg={4} xs={12}>
          <BalanceCard amountLeft="2020" />
        </Grid>
        <Grid item lg={8} sx={{ height: "400px", width: "100%" }}>
          <Paper sx={{ height: "400px", width: "100%" }}>
            <LineChart />
          </Paper>
        </Grid>
        <Grid item lg={4} sx={{ height: "400px", width: "100%" }}>
          <Paper sx={{ height: "400px", width: "100%" }}>
            <PieChart />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Overview;
