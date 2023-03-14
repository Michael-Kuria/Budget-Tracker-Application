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

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [transationDrawer, setTransactionDrawer] = useState(false);

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
          background: "#fbfbfb",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
