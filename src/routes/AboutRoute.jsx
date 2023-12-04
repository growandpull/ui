import { Box, Stack, Typography } from "@mui/material";
import TopPageHeader from "../components/TopPageHeader";
import AboutUs from "../assets/outlined-texts/aboutus.svg";
import Start from "../assets/outlined-texts/start.svg";
import Subscription from "../assets/outlined-texts/subscription.svg";
import StyledTextGroup from "../components/styled/StyledTextGroup";
import ImageStepper from "../components/ImageStepper";
import StyledFollowLink from "../components/startups/StyledFollowLink";
import { SIGN_UP_ROUTE } from "../app/Routes";
import GreyGrowAndPullMerch from "../assets/merch/GreyGrowAndPullMerch.png";
import BlackGrowAndPullMerch from "../assets/merch/BlackGrowAndPullMerch.png";
import BigArrowDown from "../assets/BigArrowDown.svg";

const AboutRoute = () => {
  return (
    <Stack gap={20}>
      <Stack marginBlockEnd={50} marginBlockStart={60} alignItems="center">
        <TopPageHeader />
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        height="500px"
        sx={{ backgroundColor: (theme) => theme.palette.background.default }}
      >
        <Stack maxWidth="300px" gap={3}>
          <StyledTextGroup
            imgTextSrc={AboutUs}
            variant="h4"
            text="Nurture Ideas, Harvest Dreams"
            imgMargin="-30px"
            alignItems="flex-start"
          />
          <Typography variant="body2">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Typography>
          <StyledFollowLink text="View more" to={"#"} />
        </Stack>
        <ImageStepper />
      </Stack>

      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <Stack
          position="relative"
          height="480px"
          justifyContent="center"
          width="600px"
        >
          <Box
            component="img"
            src={GreyGrowAndPullMerch}
            sx={{ position: "absolute", top: -10 }}
          />
          <Box
            component="img"
            src={BlackGrowAndPullMerch}
            sx={{ position: "absolute", top: 140, left: 140 }}
          />
        </Stack>
        <Stack maxWidth="300px" gap={3}>
          <StyledTextGroup
            imgTextSrc={Start}
            variant="h4"
            text="Nurture Ideas, Harvest Dreams"
            imgMargin="-30px"
            alignItems="flex-start"
          />
          <Typography variant="body2">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Typography>
          <StyledFollowLink text="Register now" to={SIGN_UP_ROUTE} />
        </Stack>
      </Stack>

      <StyledTextGroup
        imgTextSrc={Subscription}
        variant="h2"
        text="Innovate. Invest. Inspire."
        imgMargin="-38px"
        alignItems="center"
      />

      <Stack flexDirection="row" justifyContent="center" gap={4}>
        <Typography textTransform="uppercase" variant="h1">
          Join us
        </Typography>
        <img
          src={BigArrowDown}
          alt="BigArrowDown"
          style={{ width: "100px", transform: "rotate(180deg)" }}
        />
      </Stack>
    </Stack>
  );
};

export default AboutRoute;
