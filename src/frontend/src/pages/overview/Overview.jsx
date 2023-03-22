import * as React from "react";
import { Box, Grid } from "@mui/material";
import Title from "../../components/title/Title";
import AmountUsedCard from "../../components/cards/AmountUsedCard";
import BalanceCard from "../../components/cards/BalanceCard";
import LineChart from "../../components/lineChart/LineChart";
import TransactionsTable from "../../components/transactionsTable/TransactionsTable";

const Overview = ({
  categoriesAndSum,
  transactions,
  balance,
  totalExpenses,
}) => {
  return (
    <Box paddingBottom="5rem">
      <Title
        title="Overview"
        subTitle="Manage  your personal finance & budget to meet your personal goal"
      />

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
            <BalanceCard balance={balance} />
            <AmountUsedCard totalExpenses={totalExpenses} />
          </Box>
        </Grid>
        <Grid item lg={12} sx={{ height: "30rem", width: "100%" }}>
          <LineChart
            data={[
              {
                id: "categoriesAndSum",
                color: "hsl(104, 70%, 50%)",
                data: categoriesAndSum.map((item) => ({
                  x: item.name,
                  y: item.amount,
                })),
              },
            ]}
          />
        </Grid>
        <Grid item lg={12} sx={{ height: "25rem", width: "100%" }}>
          <TransactionsTable transactions={transactions} height="100%" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
