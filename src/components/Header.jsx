import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Divider, InputAdornment, Link, Stack, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DefaultLogo from "../assets/logos/DefaultLogo.svg";
import SearchIcon from "./icons/SearchIcon";
import HeartIcon from "./icons/HeartIcon";
import PersonIcon from "./icons/PersonIcon";
import { SIGN_OUT_ROUTE } from "../app/Routes";

const pages = [
  { pageName: "about us", linkTo: "#" },
  { pageName: "subscriptions", linkTo: "#" },
  { pageName: "top-10", linkTo: "#" },
];
const settings = [
  { settingName: "Profile", linkTo: "#" },
  { settingName: "Account", linkTo: "#" },
  { settingName: "Logout", linkTo: SIGN_OUT_ROUTE },
];

function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar
        component="nav"
        disableGutters
        sx={{ py: "18px", justifyContent: "space-between" }}
      >
        <Stack flexDirection="row" alignItems="center" gap={10}>
          <IconButton disableRipple>
            <img src={DefaultLogo} alt="BigLogoImage" />
          </IconButton>

          {pages.map((page, index) => (
            <Typography
              variant="caption"
              textAlign="center"
              key={index}
              fontWeight="bold"
            >
              <Link to={page.linkTo} component={RouterLink} underline="none">
                {page.pageName.toLocaleUpperCase()}
              </Link>
            </Typography>
          ))}
        </Stack>

        <TextField
          sx={{
            ".MuiOutlinedInput-root": {
              height: "29px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search.."
          variant="outlined"
          size="small"
        />

        <Stack flexDirection="row" alignItems="center" gap={5}>
          <IconButton disableRipple>
            <HeartIcon />
          </IconButton>

          <Typography variant="caption" textAlign="center" fontWeight="bold">
            <Link to={"#"} component={RouterLink} underline="none">
              {"Create a startup".toLocaleUpperCase()}
            </Link>
          </Typography>

          <Divider orientation="vertical" flexItem variant="middle" />

          <Tooltip title="Open settings">
            <IconButton disableRipple onClick={handleOpenUserMenu}>
              <Stack flexDirection="row" gap={5}>
                <PersonIcon />
                <Typography
                  variant="caption"
                  textAlign="center"
                  fontWeight="bold"
                >
                  <Link to={"#"} component={RouterLink} underline="none">
                    {"profile".toLocaleUpperCase()}
                  </Link>
                </Typography>
              </Stack>
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: "35px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting, index) => (
              <MenuItem key={index} onClick={handleCloseUserMenu}>
                <Typography
                  variant="caption"
                  textAlign="center"
                  fontWeight="bold"
                >
                  <Link
                    to={setting.linkTo}
                    component={RouterLink}
                    underline="none"
                  >
                    {setting.settingName.toLocaleUpperCase()}
                  </Link>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
