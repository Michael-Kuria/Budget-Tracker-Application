import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Title = ({ title, subTitle }) => {
  return (
    <Box
      sx={{
        margin: "1rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography
        component="h1"
        variant="h3"
        color="inherit"
        sx={{ fontWeight: "600", letterSpacing: "1.5px" }}
      >
        {title}
      </Typography>
      <Typography component="h6" variant="body1" color="#4c9c73">
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Title;
