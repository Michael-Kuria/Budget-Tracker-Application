import * as React from "react";
import { Box, Grid } from "@mui/material";
import Title from "../../components/title/Title";
import AmountUsedCard from "../../components/cards/AmountUsedCard";
import BalanceCard from "../../components/cards/BalanceCard";
import LineChart from "../../components/lineChart/LineChart";

const Overview = () => {
  return (
    <>
      <Title
        title="Overview"
        subTitle="Manage  your personal finance & budget to meet your personal goal"
      />

      {/* <Box sx={{ display: "flex", flexDirection: "row" }}> */}
      <Grid container spacing={4} mt={2}>
        <Grid item lg={12} md={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <AmountUsedCard amountUsed="20000" />
            <BalanceCard amountLeft="2020" />
          </Box>
        </Grid>
        <Grid item lg={12} sx={{ height: "400px", width: "100%" }}>
          <LineChart />
        </Grid>
      </Grid>
    </>
  );
};

export default Overview;
