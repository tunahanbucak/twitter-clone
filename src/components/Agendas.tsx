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
        backgroundColor: "rgb(22,24,28)",
        borderRadius: "1.25rem",
        border: "1px solid rgb(22,24,28)",
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
          color: "#e7e9ea",
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
            color: "1d9bf0",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "#5555",
            },
          }}
        >
          Daha fazla göster
        </Link>
      )}
    </Paper>
  );
}
