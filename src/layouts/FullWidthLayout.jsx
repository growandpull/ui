import { Box, Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../auth/useAuth";
import UnauthorizedHeader from "../components/UnauthorizedHeder";

const FullWidthLayout = () => {
  const { authorized } = useAuth();

  return (
    <Stack flexDirection="column" minHeight="100vh">
      <>
        <Container maxWidth="xl" disableGutters>
          {!authorized() ? <UnauthorizedHeader /> : <Header />}
        </Container>
        <Container
          component="main"
          maxWidth="xl"
          disableGutters
          sx={{ display: "flex", justifyContent: "center", flex: 1 }}
        >
          <Outlet />
        </Container>
        <Box
          sx={{ backgroundColor: (theme) => theme.palette.background.default }}
        >
          <Container maxWidth="xl" disableGutters sx={{ marginTop: "auto" }}>
            <Footer />
          </Container>
        </Box>
      </>
    </Stack>
  );
};

export default FullWidthLayout;
