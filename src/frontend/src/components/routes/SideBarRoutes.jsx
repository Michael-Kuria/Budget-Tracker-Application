import * as React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Overview from "../../pages/overview/Overview";
import Analytics from "../../pages/analytics/Analytics";
import Categories from "../../pages/categories/Categories";
import Transactions from "../../pages/transactions/Transactions";

import {
  getAllTransactions,
  getCategoriesAndSum,
  getBudget,
} from "../../client/Client";

/**
 * Will take care of the components routing to prevent overcrowding app.js
 * @returns
 */
const SideBarRoutes = () => {
  const [categoriesAndSum, setCategoriesAndSum] = useState([{ housing: 100 }]);
  const [budget, setBudget] = useState({});
  const [transactions, setTransactions] = useState([]);

  /**
   * For transaction state initialization
   */
  const fetchAllTransactions = () => {
    getAllTransactions()
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
        error.response.json().then((res) => {
          console.log(res);
        });
      });
  };

  useEffect(() => {
    fetchAllTransactions();
  }, []);

  /**
   * for Categories and their current total state initialization
   */
  const fetchCategoriesAndSum = () => {
    getCategoriesAndSum()
      .then((rslt) => rslt.json())
      .then((data) => {
        setCategoriesAndSum(data);
      })
      .catch((error) => {
        console.log(error.message);
        error.response.json().then((res) => {
          console.log(res);
        });
      });
  };

  useEffect(() => {
    fetchCategoriesAndSum();
  }, []);

  /**
   * Fetch the budget of the indicated month
   */
  const fetchBudget = () => {
    const date = new Date();
    console.log(date);

    console.log(date.getFullYear() + "-" + "03" + "-01");

    getBudget(date.getFullYear() + "-" + "03" + "-01")
      .then((res) => res.json())
      .then((data) => {
        setBudget(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
        error.response.json().then((res) => {
          console.log(res);
        });
      });
  };

  useEffect(() => {
    fetchBudget();
  }, []);

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
              budget={budget}
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
