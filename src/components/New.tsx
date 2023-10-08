import { Box } from "@mui/material";
import React from "react";
import ButtonComponent from "./ButtonComponent";

export default function New() {
  return (
    <Box
      sx={{
        paddingBottom: "6.3rem",
        paddingTop: "1.2rem",
        width: "90%",
      }}
    >
      <ButtonComponent size="large">Gönder</ButtonComponent>
    </Box>
  );
}
