import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import BigLogoImage from "../assets/BigLogoImage.svg";

const LogoHalfWidthLayout = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <img
          src={BigLogoImage}
          alt="BigLogoImage"
          style={{ width: "100%", height: "100vh" }}
        />
      </Grid>
      <Grid item xs={6}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default LogoHalfWidthLayout;
