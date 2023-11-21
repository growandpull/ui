import { Grid, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import BigLogoImage from "../assets/BigLogoImage.svg";

const LogoHalfWidthLayout = () => {
  return (
    <Grid container>
      <Grid item xs={5}>
        <img
          src={BigLogoImage}
          alt="BigLogoImage"
          style={{ width: "100%", height: "100vh" }}
        />
      </Grid>
      <Grid item xs={7}>
        <Stack justifyContent="center" alignItems="center" height={1}>
          <Outlet />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LogoHalfWidthLayout;
