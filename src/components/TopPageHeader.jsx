import BigLogo from "../assets/logos/BigLogo.svg";
import BigArrowDown from "../assets/BigArrowDown.svg";
import { Stack, Typography } from "@mui/material";

const TopPageHeader = () => {
  return (
    <Stack gap={11}>
      <Stack flexDirection="row" gap={6} alignItems="flex-end">
        <img src={BigArrowDown} alt="BigArrowDown" style={{ width: "150px" }} />
        <Typography variant="overline" maxWidth="380px">
          Discover Tomorrow, Invest Today.
        </Typography>
      </Stack>
      <img src={BigLogo} alt="BigLogo" />
    </Stack>
  );
};

export default TopPageHeader;
