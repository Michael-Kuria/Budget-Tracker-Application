import { Paper } from "@mui/material";
import * as React from "react";
import Title from "../../components/title/Title";
import TransactionsTable from "../../components/transactionsTable/TransactionsTable";

const Transactions = ({ transactions }) => {
  return (
    <>
      <Title
        title="Transactions"
        subTitle="Manage  your personal finance & budget to meet your personal goal"
      />
      <Paper>
        {console.log(transactions)}
        <TransactionsTable transactions={transactions} />
      </Paper>
    </>
  );
};

export default Transactions;
