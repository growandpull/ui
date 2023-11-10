import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

const HalfWidthLayout = () => {
  return (
    <Container disableGutters maxWidth="xs">
      <Outlet />
    </Container>
  );
};

export default HalfWidthLayout;
