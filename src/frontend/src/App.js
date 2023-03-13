import * as React from "react";
import { Container, Toolbar, Grid, Box, Paper } from "@mui/material";
// import {  } from "@mui/system";
import { useState } from "react";
import "./App.css";
import Sidebar from "./components/global/sidebar/Sidebar";
import Topbar from "./components/global/topbar/Topbar";
import Title from "./components/title/Title";
import AmountUsedCard from "./components/cards/AmountUsedCard";
import BalanceCard from "./components/cards/BalanceCard";

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
          <Title
            title="Overview"
            subTitle="Manage  your personal finance & budget to meet your personal goal"
          />

          {/* <Box sx={{ display: "flex", flexDirection: "row" }}> */}
          <Grid container spacing={4}>
            <Grid item lg={4} xs={12}>
              <AmountUsedCard amountUsed="20000" />
            </Grid>
            <Grid item lg={4} xs={12}>
              <BalanceCard amountLeft="20202020" />
            </Grid>
            <Grid item lg={4} xs={12}>
              <BalanceCard amountLeft="2020" />
            </Grid>
            <Grid item lg={12}>
              <Paper>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Paper>
            </Grid>
          </Grid>

          {/* </Box> */}
        </Container>
      </Box>
    </Box>
  );
}

export default App;
