import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { Typography } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  size: "small" | "medium" | "large";
}

export default function ButtonComponent({
  size,
  children,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      size={size}
      sx={{
        background: "#1d9bf0",
        borderRadius: "999px",
        width: "90%",
        height: {
          small: "20px",
          medium: "36px",
          large: "52px",
        }[size],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: {
          small: "12px",
          medium: "0px 16px",
          large: "0px 32px",
        }[size],
        "&:hover": {
          background: "#0e7abf",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: {
            small: "12px",
            medium: "16px",
            large: "17px",
          }[size],
          color: "#ffffff",
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        {children}
      </Typography>
    </Button>
  );
}
