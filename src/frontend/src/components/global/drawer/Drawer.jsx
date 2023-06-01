import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  zIndex: theme.zIndex.appBar + 1000,
}));

export default Drawer;
