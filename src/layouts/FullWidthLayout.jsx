import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const FullWidthLayout = () => {
  return (
    <Container maxWidth="lg">
      <Outlet />
    </Container>
  );
};

export default FullWidthLayout;
