import React from "react";
import MainLayout from "../layouts/MainLayout";
import Search from "../components/Search";
import Topics from "../components/Topics";
import { Box } from "@mui/material";

export default function Explore() {
  return (
    <MainLayout>
      <Box
        sx={{
          px: 2
        }}>
        <Search />
        <Topics />
      </Box>
    </MainLayout>
  );
}
