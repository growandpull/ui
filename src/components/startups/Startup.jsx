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
import StyledFollowLink from "./StyledFollowLink";
import GetCurrencySymbolUtil from "../utils/GetCurrencySymbolUtil";

const Startup = ({ imageSrc, title, currency, price, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const currencySymbol = GetCurrencySymbolUtil(currency);
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
            <StyledFollowLink text="More information" to={"#"} />
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Startup;
