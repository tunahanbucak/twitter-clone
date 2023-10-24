import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function Items({ children }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {children}
    </Box>
  );
}
