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
        variant="h4"
        color="inherit"
        sx={{ fontWeight: "500", letterSpacing: "1.5px" }}
      >
        {title}
      </Typography>
      <Typography component="h6" variant="body2" sx={{ fontWeight: "300" }}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Title;
