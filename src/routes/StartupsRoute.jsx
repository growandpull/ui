import { Stack } from "@mui/material";
import TopPageHeader from "../components/TopPageHeader";
import Startups from "../assets/outlined-texts/sturtups.svg";
import StartupsList from "../components/startups/StartupsList";
import StyledTextGroup from "../components/styled/StyledTextGroup";

const StartupsRoute = () => {
  return (
    <Stack>
      <Stack gap={35} marginBlockEnd={50} marginBlockStart={60}>
        <TopPageHeader />
        <StyledTextGroup
          imgTextSrc={Startups}
          variant="h2"
          text="Innovate. Invest. Inspire."
          imgMargin="-42px"
          alignItems="center"
        />
      </Stack>
      <StartupsList />
    </Stack>
  );
};

export default StartupsRoute;
