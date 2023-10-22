import { Box, Link, Paper, Typography } from "@mui/material";
import React from "react";
interface AgendasProps {
  title: string;
  children: React.ReactNode;
  more?: boolean | string;
}

export default function Agendas({ title, children, more }: AgendasProps) {
  return (
    <Paper
      sx={{
        backgroundColor: "var(--background-secondary)",
        borderRadius: "1.25rem",
        border: "1px solid var(--background-secondary)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          paddingY: 1,
          paddingX: 2,
          fontSize: "1.25rem",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          color: "var(--color-base)",
          mb: 0.3,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "grid",
          color: "#e7e9ea",
          fontSize: "15px",
        }}
      >
        {children}
      </Box>
      {more && typeof more === "string" && (
        <Link
          href={more}
          sx={{
            height: "3.25rem",
            display: "flex",
            borderRadius: "0 0 1.25rem 1.25rem",
            alignItems: "center",
            paddingX: 2,
            textDecoration: "none",
            color: "var(--color-primary)",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "var(--background-third)",
            },
          }}
        >
          Daha fazla göster
        </Link>
      )}
    </Paper>
  );
}
