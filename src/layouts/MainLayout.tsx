import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";

interface Props {
  children: ReactNode;
}
export default function MainLayout({ children }: Props) {
  return (
    <Box
      sx={{
        width: 1265,
        mx: "auto",
        display: "flex",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          flex: 1,
          borderLeft: "1px solid #2f3336",
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          gap: "30px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            borderRight: "1px solid #2f3336",
            maxWidth: 600,
          }}
        >
          <Outlet />
        </Box>
        <Rightbar />
      </Box>
    </Box>
  );
}
