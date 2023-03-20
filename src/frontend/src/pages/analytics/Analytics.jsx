import * as React from "react";
import { Box, Paper } from "@mui/material";
import Title from "../../components/title/Title";
import LineChart from "../../components/lineChart/LineChart";
import PieChart from "../../components/pieChart/PieChart";

const Analytics = ({ categoriesAndSum }) => {
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
        <Box sx={{ height: "30rem" }}>
          <LineChart
            data={[
              {
                id: "norway",
                color: "hsl(104, 70%, 50%)",
                data: categoriesAndSum.map((item) => ({
                  x: item.name,
                  y: item.amount,
                })),
              },
            ]}
          />
        </Box>
        <Paper sx={{ height: "30rem" }}>
          <PieChart
            data={categoriesAndSum.map((item) => ({
              id: item.name,
              label: item.name,
              value: item.amount,
            }))}
          />
        </Paper>
      </Box>
    </>
  );
};

export default Analytics;
