import * as React from "react";
import Title from "../../components/title/Title";
import TransactionsTable from "../../components/transactionsTable/TransactionsTable";

/**
 * Returns transactions page with edit and delete button displayed since @param {isTransactionPage} is set true on the table
 * @param
 * @returns
 */
const Transactions = ({
  transactions,
  setTransactionToEdit,
  toggleTransactionDrawer,
  fetchAllTransactions,
  fetchCategoriesAndSum,
}) => {
  return (
    <>
      <Title
        title="Transactions"
        subTitle="Manage  your personal finance & budget to meet your personal goal"
      />

      <TransactionsTable
        transactions={transactions}
        setTransactionToEdit={setTransactionToEdit}
        toggleTransactionDrawer={toggleTransactionDrawer}
        height="75vh"
        isTransactionPage={true}
        fetchAllTransactions={fetchAllTransactions}
        fetchCategoriesAndSum={fetchCategoriesAndSum}
      />
    </>
  );
};

export default Transactions;
