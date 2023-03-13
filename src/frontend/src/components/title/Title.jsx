import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Title = ({ title, subTitle }) => {
  return (
    <Box sx={{ margin: "1rem 0" }}>
      <Typography component="h1" variant="h4" color="inherit">
        {title}
      </Typography>
      <Typography component="h6" variant="body1" color="inherit">
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Title;
