import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FullWidthLayout = () => {
  return (
    <Container
      disableGutters
      maxWidth="xxl"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container
        component="main"
        disableGutters
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Header />
        <Outlet />
      </Container>
      <Footer />
    </Container>
  );
};

export default FullWidthLayout;
