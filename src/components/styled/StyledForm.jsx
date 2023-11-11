import { Stack, Typography } from "@mui/material";

const StyledForm = ({ component = "form", onSubmit, title, children }) => {
  return (
    <Stack
      component={component}
      gap={4}
      width="100%"
      sx={{ maxWidth: "480px" }}
      onSubmit={onSubmit}
    >
      <Typography variant="h3">{title}</Typography>
      {children}
    </Stack>
  );
};

export default StyledForm;
