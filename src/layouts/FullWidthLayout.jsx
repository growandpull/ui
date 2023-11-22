import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FullWidthLayout = () => {
  return (
    <Container disableGutters maxWidth="xxl" sx={{ minHeight: "100vh" }}>
      <Header />
      <Stack component="main">
        <Outlet />
      </Stack>
      <Footer />
    </Container>
  );
};

export default FullWidthLayout;
