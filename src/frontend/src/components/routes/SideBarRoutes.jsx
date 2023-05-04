import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Overview from "../../pages/overview/Overview";
import Analytics from "../../pages/analytics/Analytics";
import Categories from "../../pages/categories/Categories";
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
}) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Routes>
        <Route
          path="/"
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
          path="/categories"
          element={
            <ProtectedRoute>
              <Categories />
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
