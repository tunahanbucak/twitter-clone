import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}
export default function StickyHeader({ title, children }: Props) {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "var(--background-primary-alpha)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--background-third)",
      }}
    >
      <Typography
        sx={{
          paddingTop: "20px",
          px: "16px",
          height: "3,313rem",
          display: "flex",
          alignItems: "center",
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: "20px",
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}
