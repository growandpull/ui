import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import TopRighArrowIcon from "../icons/TopRighArrowIcon";

const StyledFollowLink = ({ text, to }) => {
  return (
    <Typography
      variant="caption"
      fontWeight="bold"
      textTransform="uppercase"
      display="flex"
      alignItems="center"
      sx={{ width: "fit-content", border: 1 }}
    >
      <Link
        to={to}
        component={RouterLink}
        underline="none"
        sx={{ borderRight: 1, whiteSpace: "nowrap" }}
        px={4}
        py={2}
      >
        {text}
      </Link>
      <TopRighArrowIcon style={{ margin: "0 10px" }} />
    </Typography>
  );
};

export default StyledFollowLink;
