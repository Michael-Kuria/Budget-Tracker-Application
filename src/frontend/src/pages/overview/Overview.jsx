import * as React from "react";
import { Box, Grid } from "@mui/material";
import Title from "../../components/title/Title";
import AmountUsedCard from "../../components/cards/AmountUsedCard";
import BalanceCard from "../../components/cards/BalanceCard";
import LineChart from "../../components/lineChart/LineChart";
import TransactionsTable from "../../components/transactionsTable/TransactionsTable";

const Overview = ({ categoriesAndSum, transactions, budget }) => {
  const expensesTotal = categoriesAndSum
    .map((item) => item.amount)
    .reduce((a, b) => a + b);
  return (
    <Box paddingBottom="5rem">
      <Title
        title="Overview"
        subTitle="Manage  your personal finance & budget to meet your personal goal"
      />
      {console.log(budget.budget)}

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
            <BalanceCard amountLeft={budget.budget - expensesTotal} />
            <AmountUsedCard amountUsed={expensesTotal} />
          </Box>
        </Grid>
        <Grid item lg={12} sx={{ height: "30rem", width: "100%" }}>
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
        </Grid>
        <Grid item lg={12} sx={{ height: "25rem", width: "100%" }}>
          <TransactionsTable transactions={transactions} height="100%" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
