import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../auth/useAuth";
import UnauthorizedHeader from "../components/UnauthorizedHeder";

const FullWidthLayout = () => {
  const { authorized } = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <>
        <Container maxWidth="xl" disableGutters>
          {!authorized() ? <UnauthorizedHeader /> : <Header />}
        </Container>
        <Container component="main" maxWidth="xxl" disableGutters>
          <Outlet />
        </Container>
        <Box
          sx={{ backgroundColor: (theme) => theme.palette.background.default }}
        >
          <Container maxWidth="xl" disableGutters>
            <Footer />
          </Container>
        </Box>
      </>
    </Box>
  );
};

export default FullWidthLayout;
