import { IconButton, Stack, Typography } from "@mui/material";
import TiktokIcon from "./icons/TiktokIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";

const Footer = () => {
  return (
    <Stack
      component="footer"
      height="200px"
      width={1}
      justifyContent="center"
      alignItems="center"
      sx={{
        py: "48px",
        backgroundColor: (theme) => theme.palette.secondary.main,
        position: "fixed",
        bottom: 0,
      }}
    >
      <Stack
        sx={{ maxWidth: "630px" }}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        gap={4}
      >
        <Typography variant="h6" textTransform="uppercase">
          please feel free to send us an e-mail at{" "}
          <Typography component="span" fontWeight="bolder">
            grow.and.pull@gmail.com For
          </Typography>
          any additional inquiries
        </Typography>
        <Stack flexDirection="row" gap={4} alignItems="center">
          <IconButton disableRipple size="small">
            <TiktokIcon />
          </IconButton>
          <IconButton disableRipple size="small">
            <YoutubeIcon />
          </IconButton>
          <IconButton disableRipple size="small">
            <InstagramIcon />
          </IconButton>
          <IconButton disableRipple size="small">
            <FacebookIcon />
          </IconButton>
          <IconButton disableRipple size="small">
            <TwitterIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
