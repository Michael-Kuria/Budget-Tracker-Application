import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import image from "../../../assets/michael.JPG";
import { Image } from "@mui/icons-material";
import logo from "../../../assets/logo.png";
import { useTheme } from "styled-components";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "sidebarWidth",
})(({ theme, open, sidebarWidth }) => ({
  backgroundColor: "#fff",
  color: "rgba(0, 0, 0, 0.87)",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: sidebarWidth,
    width: `calc(100% - ${sidebarWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Topbar = ({
  isSidebarDrawerOpen,
  toggleSidebarDrawer,
  toggleTransactionDrawer,
  sidebarWidth,
}) => {
  return (
    <AppBar
      position="absolute"
      open={isSidebarDrawerOpen}
      sidebarWidth={sidebarWidth}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSidebarDrawer}
          sx={{
            marginRight: "36px",
            ...(isSidebarDrawerOpen && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} height="60px" />
        <Box sx={{ flexGrow: "1" }} />
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ borderRadius: "100px", backgroundColor: "#007bff" }}
            onClick={toggleTransactionDrawer}
          >
            New Transaction
          </Button>
          <IconButton>
            <Badge badgeContent={1} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar alt="Michael" src={image} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
