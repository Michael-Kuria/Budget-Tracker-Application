import * as React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import Title from "../../components/title/Title";
import LineChart from "../../components/lineChart/LineChart";
import PieChart from "../../components/pieChart/PieChart";

const Analytics = () => {
  return (
    <>
      <Title
        title="Analytics"
        subTitle="Manage  your personal finance & budget to meet your personal goal"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "2rem",
        }}
      >
        <Paper sx={{ height: "30rem" }}>
          <LineChart />
        </Paper>
        <Paper sx={{ height: "20rem" }}>
          <PieChart />
        </Paper>
      </Box>
    </>
  );
};

export default Analytics;
