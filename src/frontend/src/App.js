import * as React from "react";
import { Toolbar, Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Sidebar from "./components/global/sidebar/Sidebar";
import Topbar from "./components/global/topbar/Topbar";

import TransactionDrawer from "./components/global/transactionDrawer/TransactionDrawer";
import SideBarRoutes from "./components/routes/SideBarRoutes";

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
    <Box sx={{ position: "relative", display: "flex" }}>
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
          overflow: "auto",
          background: "#f5f5f5",
        }}
      >
        <Toolbar />
        <SideBarRoutes />
      </Box>
    </Box>
  );
}

export default App;
