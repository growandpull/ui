import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DefaultLogo from "../assets/logos/DefaultLogo.svg";

import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from "../app/Routes";

function UnauthorizedHeader() {
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar
        component="nav"
        disableGutters
        sx={{ py: "18px", justifyContent: "space-between" }}
      >
        <IconButton disableRipple>
          <img src={DefaultLogo} alt="BigLogoImage" />
        </IconButton>
        <Stack flexDirection="row" gap={15}>
          <Typography
            variant="caption"
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
          >
            <Link
              to={SIGN_IN_ROUTE}
              component={RouterLink}
              underline="none"
              color="secondary"
              py={2}
              px={5}
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                borderRadius: "24px",
              }}
            >
              Sign in
            </Link>
          </Typography>
          <Typography
            variant="caption"
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
          >
            <Link
              to={SIGN_UP_ROUTE}
              component={RouterLink}
              underline="none"
              color="secondary"
              py={2}
              px={5}
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                borderRadius: "24px",
              }}
            >
              Sign up
            </Link>
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default UnauthorizedHeader;
