import { Box, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";

import {
  getAllTransactions,
  getCategoriesAndSum,
  getBudget,
  getCategories,
} from "../../client/Client";
import Sidebar from "../../components/global/sidebar/Sidebar";
import Topbar from "../../components/global/topbar/Topbar";
import TransactionDrawer from "../../components/global/transactionDrawer/TransactionDrawer";
import SideBarRoutes from "../../components/routes/SideBarRoutes";

const Main = () => {
  const [isSidebarDrawerOpen, setIsSidebarDrawerOpen] = useState(true);
  const [isTransactionDrawerOpen, setIsTransactionDrawerOpen] = useState(false);
  const [categoriesAndSum, setCategoriesAndSum] = useState([]);
  const [budget, setBudget] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [balance, setBalance] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const sidebarWidth = 240;
  /**
   * A function for expanding and collapsing the sidebar
   */
  const toggleSidebarDrawer = () => {
    setIsSidebarDrawerOpen(!isSidebarDrawerOpen);
  };

  /**
   * New Transaction drawer opening and closing function
   */

  const toggleTransactionDrawer = () => {
    setIsTransactionDrawerOpen(!isTransactionDrawerOpen);
  };

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

  /**
   * Fetch categories
   */

  const fetchCategories = () => {
    getCategories()
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log("HERE " + JSON.stringify(categories));
      })
      .catch((error) => {
        console.log(error.message);
        error.response.json().then((res) => {
          console.log(res);
        });
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  /**
   * update the total expense states, when categoriesAndSum state changes
   */

  useEffect(() => {
    setTotalExpenses(
      categoriesAndSum.length === 0
        ? 0
        : categoriesAndSum.map((item) => item.amount).reduce((a, b) => a + b)
    );
    console.log("Now you see me in Total Expenses. HAHAHA");
  }, [categoriesAndSum]);

  /**
   * update the balance when budget or expense total state changes
   */

  useEffect(() => {
    setBalance(budget.budget - totalExpenses);
    console.log("Now you see me in balance. HAHAHA");
  }, [budget, totalExpenses]);

  return (
    <Box component="main" sx={{ position: "relative", display: "flex" }}>
      <Topbar
        isSidebarDrawerOpen={isSidebarDrawerOpen}
        toggleSidebarDrawer={toggleSidebarDrawer}
        sidebarWidth={sidebarWidth}
        toggleTransactionDrawer={toggleTransactionDrawer}
      />
      <Sidebar
        isSidebarDrawerOpen={isSidebarDrawerOpen}
        toggleSidebarDrawer={toggleSidebarDrawer}
        sidebarWidth={sidebarWidth}
      />
      <TransactionDrawer
        categories={categories}
        fetchAllTransactions={fetchAllTransactions}
        isTransactionDrawerOpen={isTransactionDrawerOpen}
        toggleTransactionDrawer={toggleTransactionDrawer}
        fetchCategoriesAndSum={fetchCategoriesAndSum}
      />
      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto",
          background: "#f5f5f5",
        }}
      >
        <Toolbar />
        <SideBarRoutes
          transactions={transactions}
          categoriesAndSum={categoriesAndSum}
          budget={budget}
          totalExpenses={totalExpenses}
          balance={balance}
        />
      </Box>
    </Box>
  );
};

export default Main;
