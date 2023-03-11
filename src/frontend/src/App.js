import { Box } from "@mui/system";
import { useState } from "react";
import "./App.css";
import Sidebar from "./components/global/sidebar/Sidebar";
import Topbar from "./components/global/topbar/Topbar";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const drawerWidth = 240;
  return (
    <Box sx={{ height: "100vh" }}>
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
    </Box>
  );
}

export default App;
