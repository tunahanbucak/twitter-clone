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
        maxWidth: "100%",
        width: "100%",
        display: "inline-flex",
        gap: "1rem",
        background: " var(--background-primary)",
        padding: "12px 16px 12px 16px",
        justifyContent: "flex-start",
        "&:hover": {
          backgroundColor: "var(--background-secondary)",
        },
      }}
    >
      <Box
        sx={{
          width: "24px",
          height: "24px",
          position: "relative",
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{
          paddingRight: "1rem",
          fontSize: "1.25rem",
          color: "var(--color-base)",
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
