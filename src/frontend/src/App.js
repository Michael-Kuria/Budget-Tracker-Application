import * as React from "react";
import { Toolbar, Box, Container } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Sidebar from "./components/global/sidebar/Sidebar";
import Topbar from "./components/global/topbar/Topbar";
import Overview from "./pages/overview/Overview";

import { Route, Routes } from "react-router-dom";
import Analytics from "./pages/analytics/Analytics";
import Categories from "./pages/categories/Categories";
import Transactions from "./pages/transactions/Transactions";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const drawerWidth = 240;
  return (
    <Box sx={{ position: "relative", height: "100vh", display: "flex" }}>
      <Topbar
        drawerOpen={openDrawer}
        toggleDrawer={toggleDrawer}
        drawerWidth={drawerWidth}
      />
      <Sidebar
        drawerOpen={openDrawer}
        toggleDrawer={toggleDrawer}
        drawerWidth={drawerWidth}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
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
