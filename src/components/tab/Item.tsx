import { Box, Button } from "@mui/material";
import React, { ReactNode } from "react";
import { useTab } from "./Context";

interface Props {
  children: ReactNode;
  id: string;
}
export default function Item({ children, id }: Props) {
  const { active, setActive } = useTab();
  return (
    <Button
      onClick={() => {
        setActive(id);
      }}
      sx={{
        flex: "auto",
        color: "var(--color-base)",
        textAlign: "center",
        "&:hover": {
          backgroundColor: "var(--background-secondary)",
        },
        transition: "background-color 0.3s",
      }}
    >
      <Box
        sx={{
          height: "3.313rem",
          display: "inline-flex",
          position: "relative",
          alignItems: "center",

          ...(active === id && {
            fontWeight: "bold",
          }),
          ...(active !== id && {
            color: "var(--color-base-secondary)",
          }),
        }}
      >
        {children}
        {active === id && (
          <Box
            sx={{
              height: "4px",
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              borderRadius: "9999px",
              background: "var(--color-primary)",
            }}
          />
        )}
      </Box>
    </Button>
  );
}
