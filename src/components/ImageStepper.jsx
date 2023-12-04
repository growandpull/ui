import React from "react";
import Box from "@mui/material/Box";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { Typography } from "@mui/material";
import GroowAndPullOnTheWall from "../assets/slider-images/G&P_on_the_wall.jpg";

const images = [
  {
    label: "G&P merch",
    imgPath: GroowAndPullOnTheWall,
  },
  {
    label: "G&P merch",
    imgPath: GroowAndPullOnTheWall,
  },
  {
    label: "G&P merch",
    imgPath: GroowAndPullOnTheWall,
  },
];

const Dot = ({ active, onClick }) => (
  <Typography
    variant="span"
    sx={{
      height: "8px",
      width: "8px",
      border: (theme) => `1px solid ${theme.palette.primary.main}`,
      background: (theme) =>
        active ? theme.palette.primary.main : "transparent",
      borderRadius: "50%",
      display: "inline-block",
      margin: "0 8px",
      cursor: "pointer",
    }}
    onClick={onClick}
  />
);

const ImageStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const bind = useDrag(({ down, movement: [mx], cancel }) => {
    if (down) {
      const nextX = -activeStep * 525 + mx;
      api.start({ x: nextX });
      if (Math.abs(mx) > 50) {
        cancel();
      }
    } else {
      const nextStep = mx > 0 ? activeStep - 1 : activeStep + 1;
      setActiveStep((prev) =>
        Math.max(0, Math.min(images.length - 1, nextStep))
      );
    }
  });

  const [{ x }, api] = useSpring(() => ({ x: -activeStep * 525 }));

  const handleDotClick = (index) => {
    setActiveStep(index);
  };

  const handleImageClick = (index) => {
    setActiveStep(index);
  };

  return (
    <Box sx={{ maxWidth: 525, flexGrow: 1, overflow: "hidden" }}>
      <animated.div
        {...bind()}
        style={{
          touchAction: "none",
          display: "flex",
          transform: x.to(
            (val) =>
              `translate3d(${Math.max(val, (images.length - 1) * -525)}px,0,0)`
          ),
          width: `${images.length * 525}px`,
        }}
      >
        {images.map((step, index) => (
          <Box
            key={index}
            component="img"
            sx={{
              display: "block",
              width: "525px",
              cursor: "pointer",
            }}
            src={step.imgPath}
            alt={step.label}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </animated.div>
      <Box sx={{ textAlign: "center" }}>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === activeStep}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageStepper;
