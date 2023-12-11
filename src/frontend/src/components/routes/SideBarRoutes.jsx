import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Overview from "../../pages/overview/Overview";
import Analytics from "../../pages/analytics/Analytics";
import Budgets from "../../pages/budgets/Budgets";
import Transactions from "../../pages/transactions/Transactions";
import { ProtectedRoute } from "../helpers/ProtectedRoute";

/**
 * Will take care of the components routing to prevent overcrowding app.js
 * @returns
 */
const SideBarRoutes = ({
  categoriesAndSum,
  transactions,
  balance,
  totalExpenses,
  setTransactionToEdit,
  toggleTransactionDrawer,
  fetchAllTransactions,
  fetchCategoriesAndSum,
  budget,
}) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4,  }}>
      <Routes>
        <Route
          path="/overview"
          element={
            <ProtectedRoute>
              <Overview
                categoriesAndSum={categoriesAndSum}
                transactions={
                  transactions.length > 5
                    ? transactions.slice(0, 5)
                    : transactions
                }
                balance={balance}
                totalExpenses={totalExpenses}
                budget={budget}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics categoriesAndSum={categoriesAndSum} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/budgets"
          element={
            <ProtectedRoute>
              <Budgets />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <Transactions
                transactions={transactions}
                setTransactionToEdit={setTransactionToEdit}
                toggleTransactionDrawer={toggleTransactionDrawer}
                fetchAllTransactions={fetchAllTransactions}
                fetchCategoriesAndSum={fetchCategoriesAndSum}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Container>
  );
};

export default SideBarRoutes;
