import * as React from "react";
import { Toolbar, Box, Container, CssBaseline } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Sidebar from "./components/global/sidebar/Sidebar";
import Topbar from "./components/global/topbar/Topbar";
import Overview from "./pages/overview/Overview";

import { Route, Routes } from "react-router-dom";
import Analytics from "./pages/analytics/Analytics";
import Categories from "./pages/categories/Categories";
import Transactions from "./pages/transactions/Transactions";
import TransactionDrawer from "./components/global/transactionDrawer/TransactionDrawer";
import getAllTransactions from "./client/Client";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [transationDrawer, setTransactionDrawer] = useState(false);
  const [transactions, setTransactions] = useState([
    {
      id: "681783c8-d59a-44ae-baa8-96e52a7c5375",
      date: "2022-12-05",
      modificationDate: null,
      amount: 805,
      description: "aa33:744a:e180:c5b4:d4ce:e2d8:e1:ebfb",
      category: {
        id: 9,
        name: "Debt",
        amount: 10000,
        description: "Your housing usage",
      },
    },
    {
      id: "d57a2334-8cd3-4cb6-a9de-0c76815df680",
      date: "2022-07-25",
      modificationDate: null,
      amount: 963,
      description: "9df4:6084:c15d:642f:2c96:8a5:7ffd:31d0",
      category: {
        id: 5,
        name: "Clothing",
        amount: 10000,
        description: "Your housing usage",
      },
    },
  ]);

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

  React.useEffect(() => {
    fetchAllTransactions();
  }, []);

  const toggleTransactionDrawer = () => {
    setTransactionDrawer(!transationDrawer);
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const drawerWidth = 240;
  return (
    <Box sx={{ position: "relative", height: "100vh", display: "flex" }}>
      <CssBaseline />
      <Topbar
        drawerOpen={openDrawer}
        toggleDrawer={toggleDrawer}
        drawerWidth={drawerWidth}
        toggleTransactionDrawer={toggleTransactionDrawer}
      />
      <Sidebar
        drawerOpen={openDrawer}
        toggleDrawer={toggleDrawer}
        drawerWidth={drawerWidth}
      />
      <TransactionDrawer
        isOpen={transationDrawer}
        toggleTransactionDrawer={toggleTransactionDrawer}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          background: "#f5f5f5",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/categories" element={<Categories />} />
            <Route
              path="/transactions"
              element={<Transactions transactions={transactions} />}
            />
          </Routes>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
