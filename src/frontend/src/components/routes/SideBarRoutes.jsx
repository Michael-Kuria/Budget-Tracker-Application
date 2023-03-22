import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Overview from "../../pages/overview/Overview";
import Analytics from "../../pages/analytics/Analytics";
import Categories from "../../pages/categories/Categories";
import Transactions from "../../pages/transactions/Transactions";

/**
 * Will take care of the components routing to prevent overcrowding app.js
 * @returns
 */
const SideBarRoutes = ({
  categoriesAndSum,
  transactions,
  balance,
  totalExpenses,
}) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Routes>
        <Route
          path="/"
          element={
            <Overview
              categoriesAndSum={categoriesAndSum}
              transactions={
                transactions.length > 5
                  ? transactions.slice(0, 5)
                  : transactions
              }
              balance={balance}
              totalExpenses={totalExpenses}
            />
          }
        />
        <Route
          path="/analytics"
          element={<Analytics categoriesAndSum={categoriesAndSum} />}
        />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/transactions"
          element={<Transactions transactions={transactions} />}
        />
      </Routes>
    </Container>
  );
};

export default SideBarRoutes;
