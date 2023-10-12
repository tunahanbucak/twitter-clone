import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "./ButtonComponent";

export default function Premium() {
  return (
    <Paper
      sx={{
        backgroundColor: "rgb(22,24,28)",
        marginBottom: "1rem",
        borderRadius: "1.25rem",
        border: "1px solid rgb(22,24,28)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: 350,
        height: 165.6,
      }}
    >
      <Box
        sx={{
          padding: "12px 16px 12px 12px",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            lineHeight: "1.5",
            color: "rgb(231,233,234)",
            mt: -1,
          }}
        >
          Premium'a Abone Ol
        </Typography>
        <Typography
          sx={{
            lineHeight: "1.5rem",
            color: "rgb(231,233,234)",
            fontWeight: "bold",
            fontSize: "0.94rem",
            mt: 0.5,
            mb: 0.7,
          }}
        >
          Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam
          geliri payı kazan.
        </Typography>
        <Box
          sx={{
            alignSelf: "start",
            // mt: 1.7,
          }}
        >
          <ButtonComponent size="small">Abone Ol</ButtonComponent>
        </Box>
      </Box>
    </Paper>
  );
}
