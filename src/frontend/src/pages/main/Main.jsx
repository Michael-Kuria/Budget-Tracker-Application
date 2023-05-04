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
import { useAuth } from "../../components/AuthContext/AuthContext";
import { Home } from "../Home/Home";
import { ProtectedComponent } from "../../components/helpers/ProtectedComponent";

const Main = () => {
  const [isSidebarDrawerOpen, setIsSidebarDrawerOpen] = useState(true);
  const [isTransactionDrawerOpen, setIsTransactionDrawerOpen] = useState(false);
  const [categoriesAndSum, setCategoriesAndSum] = useState([]);
  const [budget, setBudget] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [balance, setBalance] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [transactionToEdit, setTransactionToEdit] = useState({
    date: new Date(),
    category: { name: "Housing" },
    amount: 0,
    description: "",
  });
  const { isUserAuthenticated } = useAuth();

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

    getBudget(date.getFullYear() + "-03-01")
      .then((res) => res.json())
      .then((data) => {
        setBudget(data);
      })
      .catch((error) => {
        console.log(error.message);
        error.response.json().then((res) => {});
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
  }, [categoriesAndSum]);

  /**
   * update the balance when budget or expense total state changes
   */

  useEffect(() => {
    setBalance(budget.budget - totalExpenses);
  }, [budget, totalExpenses]);

  useEffect(() => {
    // if (transactions.length > 0) setTransactionToEdit(transactions[0]);
  }, [transactions]);

  // if (isUserAuthenticated()) {
  return (
    <Box component="main" sx={{ position: "relative", display: "flex" }}>
      <ProtectedComponent>
        <Topbar
          isSidebarDrawerOpen={isSidebarDrawerOpen}
          toggleSidebarDrawer={toggleSidebarDrawer}
          sidebarWidth={sidebarWidth}
          toggleTransactionDrawer={toggleTransactionDrawer}
        />
      </ProtectedComponent>

      <ProtectedComponent>
        <Sidebar
          isSidebarDrawerOpen={isSidebarDrawerOpen}
          toggleSidebarDrawer={toggleSidebarDrawer}
          sidebarWidth={sidebarWidth}
        />
      </ProtectedComponent>
      <ProtectedComponent>
        <TransactionDrawer
          categories={categories}
          fetchAllTransactions={fetchAllTransactions}
          isTransactionDrawerOpen={isTransactionDrawerOpen}
          toggleTransactionDrawer={toggleTransactionDrawer}
          fetchCategoriesAndSum={fetchCategoriesAndSum}
          transactionToEdit={transactionToEdit}
          setTransactionToEdit={setTransactionToEdit}
        />
      </ProtectedComponent>
      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto",
          background: `${isUserAuthenticated() ? "#f5f5f5" : "ffff"}`,
        }}
      >
        <ProtectedComponent>
          <Toolbar />
        </ProtectedComponent>
        <SideBarRoutes
          transactions={transactions}
          categoriesAndSum={categoriesAndSum}
          budget={budget}
          totalExpenses={totalExpenses}
          balance={balance}
          setTransactionToEdit={setTransactionToEdit}
          toggleTransactionDrawer={toggleTransactionDrawer}
          fetchAllTransactions={fetchAllTransactions}
          fetchCategoriesAndSum={fetchCategoriesAndSum}
        />
        <Home />
      </Box>
    </Box>
  );
  // } else {
  //   return <Home />;
  // }
};

export default Main;
