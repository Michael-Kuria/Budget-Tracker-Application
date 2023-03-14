import { Paper } from "@mui/material";
import * as React from "react";
import Title from "../../components/title/Title";
import TransactionsTable from "../../components/transactionsTable/TransactionsTable";

const Transactions = () => {
  return (
    <>
      <Title
        title="Transactions"
        subTitle="Manage  your personal finance & budget to meet your personal goal"
      />
      <Paper>
        <TransactionsTable />
      </Paper>
    </>
  );
};

export default Transactions;
