import { Box, Button, Icon, Typography } from "@mui/material";
import photo from "../../assets/bt.png";
import logo from "../../assets/logo.png";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const btnStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  ":hover": {
    backgroundColor: "#1a88ff",
  },
  padding: ".5rem",
  height: "fit-content",
};

const Welcome = () => {
  const { isUserAuthenticated } = useAuth();
  function handleLogin(e) {
    e.preventDefault();
  }
  return (
    <Box sx={{ padding: "0rem 2rem" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Box
          sx={{
            width: "200px",
            height: "90px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="logo" height="100%" />
        </Box>
        {!isUserAuthenticated() ? (
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Link to="/login">
              <Button sx={btnStyle}>Login</Button>
            </Link>
            <Button sx={btnStyle}>Sign Up</Button>
          </Box>
        ) : (
          <Button sx={btnStyle}>
            Go to App <ChevronRightIcon />
          </Button>
        )}
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          marginTop: "5rem",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography variant="h2" sx={{}}>
            MANAGE YOUR EXPENSES EASILY WITH BUDGET TRACKER
          </Typography>
          <Typography varaint="subtitle1" sx={{ fontWeight: "300" }}>
            A Tool for managing personal finances. By providing users with the
            ability to input and view their transactions on tables and graphs,
            so that they can better understand their spending habits and take
            steps to achieve their financial goals
          </Typography>
        </Box>
        <img src={photo} />
      </Box>
    </Box>
  );
};

export default Welcome;

{
  /* <main>
      <nav>
        <button>Login</button>
        <button>Sign Up</button>
      </nav>
      <div>
        <div>
          <p>MANAGE YOUR EXPENSES EASILY WITH BUDGET TRACKER</p>
          <p>
            A Tool for managing personal finances. By providing users with the
            ability to input and view their transactions on tables and graphs,
            so that they can better understand their spending habits and take
            steps to achieve their financial goals
          </p>
        </div>
        <div>{bt}</div>
      </div>
    </main> */
}
