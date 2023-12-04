import { Stack, Typography } from "@mui/material";
import React from "react";

const StyledTextGroup = ({
  imgTextSrc,
  variant,
  text,
  maxWidth,
  imgMargin,
  alignItems,
}) => {
  return (
    <Stack alignItems={alignItems}>
      <img src={imgTextSrc} alt="Outlined text" style={{ margin: imgMargin }} />
      <Typography
        variant={variant}
        textTransform="uppercase"
        maxWidth={maxWidth}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default StyledTextGroup;
