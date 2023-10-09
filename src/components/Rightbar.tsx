import { Box } from "@mui/material";
import React from "react";
import Search from "./Search";
import Premium from "./Premium";

export default function Rightbar() {
  return (
    <Box
      sx={{
        width: 350,
        mr: 2.5,
      }}
    >
      <Search />
      <Premium />
      <Box></Box>
    </Box>
  );
}
