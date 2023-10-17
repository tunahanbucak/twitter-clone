import React, { ReactNode } from "react";
import { Button, Box, Typography } from "@mui/material";

interface IconButtonProps {
  title: string;
  icon: ReactNode;
}
const IconButton = ({ icon, title }: IconButtonProps) => {
  return (
    <Button
      sx={{
        height: "3.5rem",
        width: "100%",
        transition: "bacgroundcolor 0.3s",
        display: "inline-flex",
        alignItems: "flex-start",
        gap: "1rem",
        background: "black",
        "&:hover": {
          backgroundColor: "#5555",
        },
      }}
    >
      <Box
        sx={{
          width: "26.25px",
          height: "26.25px",
          position: "relative",
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{
          paddingRight: "1rem",
          fontSize: "1.25rem",
          color: "#ffffff",
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};
export default IconButton;
