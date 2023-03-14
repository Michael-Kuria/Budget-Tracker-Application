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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})(({ theme, open, drawerWidth }) => ({
  backgroundColor: "#fff",
  color: "rgba(0, 0, 0, 0.87)",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Topbar = ({
  drawerWidth,
  drawerOpen,
  toggleDrawer,
  toggleTransactionDrawer,
}) => {
  return (
    <AppBar position="absolute" open={drawerOpen} drawerWidth={drawerWidth}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(drawerOpen && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap>
          Budget Tracker
        </Typography>
        <Box sx={{ flexGrow: "1" }} />
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ borderRadius: "100px", backgroundColor: "#3379FF" }}
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
