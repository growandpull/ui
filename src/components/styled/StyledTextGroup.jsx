import { Stack, Typography } from "@mui/material";
import React from "react";

const StyledTextGroup = ({ imgTextSrc, variant, text }) => {
  return (
    <Stack alignItems="center">
      <img
        src={imgTextSrc}
        alt="Outlined text"
        style={{ margin: "-42px", minHeight: "20px" }}
      />
      <Typography
        variant={variant}
        textTransform="uppercase"
        textAlign="center"
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default StyledTextGroup;
