import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import HeartIcon from "../icons/HeartIcon";
import { Link as RouterLink } from "react-router-dom";
import TopRighArrowIcon from "../icons/TopRighArrowIcon";

const Startup = ({ imageSrc, title, currency, price, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getCurrencySymbol = () => {
    switch (currency) {
      case "USD":
        return "$";
      case "UAH":
        return "₴";
      case "EUR":
        return "€";
      default:
        return "";
    }
  };

  const currencySymbol = getCurrencySymbol();
  const hasImageData = Boolean(
    imageSrc && imageSrc.length > "data:image/jpeg;base64,null".length
  );

  return (
    <Card variant="outlined" sx={{ width: "100%", padding: "40px" }}>
      <Grid container>
        {hasImageData && (
          <Grid item xs={hasImageData ? 3 : 0} pr={8}>
            <CardMedia
              sx={{ height: "100%" }}
              image={imageSrc}
              title="Startup"
            />
          </Grid>
        )}
        <Grid item xs={hasImageData ? 7 : 10}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: 0,
            }}
          >
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h6">
              {currencySymbol}
              {price}
            </Typography>
            <Typography variant="body1">
              {showFullDescription
                ? description
                : `${description.substring(0, 150)}...`}
            </Typography>
            {description.length > 150 && (
              <Link
                component="button"
                onClick={toggleDescription}
                color="primary"
                variant="body2"
                underline="none"
                width="fit-content"
              >
                {showFullDescription ? "Show less" : "Show more"}
              </Link>
            )}
          </CardContent>
        </Grid>
        <Grid item xs={2}>
          <CardActions
            sx={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
              padding: 0,
              height: "100%",
            }}
          >
            <IconButton disableRipple>
              <HeartIcon />
            </IconButton>
            <Typography
              variant="caption"
              fontWeight="bold"
              textTransform="uppercase"
              display="flex"
              alignItems="center"
              sx={{ border: 1 }}
            >
              <Link
                to={"#"}
                component={RouterLink}
                underline="none"
                sx={{ borderRight: 1, whiteSpace: "nowrap" }}
                px={4}
                py={2}
              >
                More information
              </Link>
              <TopRighArrowIcon style={{ margin: "0 16px" }} />
            </Typography>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Startup;
