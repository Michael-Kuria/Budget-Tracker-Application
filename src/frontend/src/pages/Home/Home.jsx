import { Box } from "@mui/material";
import Welcome from "../../components/welcome/Welcome";
import { Route, Routes } from "react-router-dom";
import Login from "../../components/login/Login";

export const Home = () => {
  return (
    <Box component="main" sx={{ width: "100%" }}>
      <Routes>
        <Route path="/home" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Box>
  );
};
