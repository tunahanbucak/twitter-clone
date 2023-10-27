import Button, { ButtonProps } from "@mui/material/Button";
import { Typography } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  size: "small" | "medium" | "large";
}
export default function ButtonComponent({ size, children }: CustomButtonProps) {
  return (
    <Button
      size={size}
      sx={{
        background: "var(--color-primary)",
        borderRadius: "9999px",
        width: {
          small: "30%",
          medium: "15%",
          large: "90%",
        }[size],

        height: {
          small: "2rem",
          medium: "2rem",
          large: "52px",
        }[size],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: {
          small: "0px 1rem 0px 1rem",
          medium: "0px 1rem 0px 1rem",
          large: "0px 32px",
        }[size],
        "&:hover": {
          background: "var(--color-primary)",
          opacity: 90,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: {
            small: "0.85rem",
            medium: "0.85rem",
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
