import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const FullWidthLayout = () => {
  return (
    <Container disableGutters maxWidth="xxl">
      <Header />
      <Outlet />
    </Container>
  );
};

export default FullWidthLayout;
