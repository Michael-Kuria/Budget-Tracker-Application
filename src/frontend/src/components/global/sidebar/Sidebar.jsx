import * as React from "react";
import MuiDrawer from "@mui/material/Drawer";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { Link } from "react-router-dom";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "sidebarWidth",
})(({ theme, open, sidebarWidth }) => ({
  "& .MuiDrawer-paper": {
    "& .MuiListItemButton-root:hover": {
      backgroundColor: "#b9d1ec",
      color: "#1565c0",
    },

    "& .MuiListItemButton-root:hover  .css-cveggr-MuiListItemIcon-root": {
      color: "#1565c0",
    },
    position: "relative",
    whiteSpace: "nowrap",
    width: sidebarWidth,
    height: "100vh",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Sidebar = ({
  isSidebarDrawerOpen,
  toggleSidebarDrawer,
  sidebarWidth,
}) => {
  return (
    <Drawer
      variant="permanent"
      open={isSidebarDrawerOpen}
      sidebarWidth={sidebarWidth}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <IconButton onClick={toggleSidebarDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <Link to="/overview">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Overview</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/analytics">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ShowChartOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Analytics</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/transactions">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ReceiptLongOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Transactions</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/categories">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <CategoryOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Categories</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default Sidebar;
